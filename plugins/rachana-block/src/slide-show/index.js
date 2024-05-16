import { registerBlockType } from '@wordpress/blocks';
import { RangeControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import './style.css';

function cleansePostContent(dirtyContent) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = dirtyContent;
    const cleanContent = tempDiv.textContent || tempDiv.innerText || '';
    const imageLink = tempDiv.querySelector('img') ? tempDiv.querySelector('img').src : null;
    return { cleanContent, imageLink };
}

registerBlockType('rachana-block/slide-show', {
    attributes: {
        postCount: {
            type: 'number',
            default: 5,
        },
        posts: {
            type: 'array',
            default: [],
        },
    },
    edit: (props, blockProps) => {
        const { attributes, setAttributes } = props;
        const [posts, setPosts] = useState([]);
        const [authors, setAuthors] = useState({});
        const [categories, setCategories] = useState({});

        const apiRequest = async () => {
            const res = await apiFetch({
                path: `/wp/v2/posts?order=desc&orderby=date&per_page=${attributes.postCount}`,
            });
            const authors = await fetchAuthors(res);
            const categories = await fetchCategories(res);
            const processedPosts = res.map((post) => {
                const { cleanContent, imageLink } = cleansePostContent(post.content.rendered);
                const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                return {
                    ...post,
                    author: authors[post.author],
                    categories: post.categories.map((id) => categories[id]),
                    cleanContent,
                    imageLink,
                    formattedDate,
                };
            });
            setPosts(processedPosts);
            setAuthors(authors);
            setCategories(categories);
            setAttributes({ posts: processedPosts });
        };

        const fetchAuthors = async (posts) => {
            const authorIds = [...new Set(posts.map((post) => post.author))];
            const authors = await Promise.all(
                authorIds.map(async (id) => {
                    const author = await apiFetch({ path: `/wp/v2/users/${id}` });
                    return { [id]: `${author.name} (${author.slug})` };
                })
            );
            return Object.assign({}, ...authors);
        };

        const fetchCategories = async (posts) => {
            const categoryIds = [...new Set(posts.flatMap((post) => post.categories))];
            const categories = await Promise.all(
                categoryIds.map(async (id) => {
                    const category = await apiFetch({ path: `/wp/v2/categories/${id}` });
                    return { [id]: category.name };
                })
            );
            return Object.assign({}, ...categories);
        };

        useEffect(() => {
            apiRequest();
        }, [attributes.postCount]);

        return (
            <div {...blockProps}>
                <h2>Latest Posts Slide Show</h2>
                <RangeControl
                    label="Number of Posts"
                    value={attributes.postCount}
                    onChange={(value) => setAttributes({ postCount: value })}
                    min={1}
                    max={20}
                />
                <p>This block will display a slide show of the latest {attributes.postCount} posts.</p>
            </div>
        );
    },
    save: ({ attributes }) => {
        const { posts } = attributes;

        return (
            <div id="postCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner cgds page-component-item-wrapper picture-item">
                    {posts.map((post, index) => (
                        <div key={post.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                            <div className="cgds card card-horizontal" variant="card-horizontal">
                                {post.imageLink && <img className="card-img-left" src={post.imageLink} alt="Post Image"/>}
                                <div className="card-body">
                                    <div className="card-body">
                                        <p className="card-text">
                                            <small className="text-muted">{post.formattedDate} | {post.author}</small>
                                        </p>
                                        <a className="stretched-link link-primary h3 card-title">{post.title.rendered}</a>
                                        <p className="card-text">{post.cleanContent}</p>
                                        <button type="button" className="btn btn-primary cgds">បុរេជម្រើស</button>
                                        <a role="button" href="/get-started" className="cgds btn btn-primary">ការចាប់ផ្ដើម</a>
                                        {post.categories.length > 0 && (
                                            <div>
                                                {post.categories.map((category) => (
                                                    <a key={category.id} role="button" href={`/category/${category.slug}`} className="cgds btn btn-primary">
                                                        {category.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a className="carousel-control-prev" href="#postCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#postCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    },
});
