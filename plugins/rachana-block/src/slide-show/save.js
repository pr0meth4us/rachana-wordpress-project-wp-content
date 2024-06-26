import { useBlockProps } from "@wordpress/block-editor";
import ChevronIcon from "../../assets/img/icons/chevron-right-normal.svg";
import TimeIcon from "../../assets/img/icons/time-icon.svg";
import PersonIcon from "../../assets/img/icons/person-icon.svg";

export const save = ({ attributes }) => {
    const { posts } = attributes;
    const blockProps = useBlockProps.save();
    const blockId = `postCarousel-${attributes.id}`;
    return (
        <div {...blockProps} id={blockId} className="carousel cgds slide" data-ride="carousel" data-interval="3000" data-pause="hover">
            <ol className="carousel-indicators">
                {posts.map((post, index) => (
                    <li key={post.key} data-target={`#${blockId}`} data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                ))}
            </ol>
            <div className="carousel-inner">
                {posts.map((post, index) => (
                    <div key={post.key} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <div className="cgds card card-horizontal">
                            {post.imageLink && <img className="card-img-left" src={post.imageLink} alt="Post Image" ></img>}
                            <div className="card-body">
                                <div className="container">
                                    <p className="card-text">
                                        <img src={TimeIcon} className="slide-icon" alt="Time Icon"></img>
                                        <small className="text-muted card-text-muted">{" "}{post.date}{" "}|{" "}</small>
                                        <img src={PersonIcon} className="slide-icon" alt="Person Icon"> </img>
                                        <small className="text-muted card-text-muted">{" "}{post.author}</small>
                                    </p>
                                    <a href={post.link} className="link-primary h3 card-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></a>
                                    <div className="category-links-wrapper">
                                        {post.categories.length > 0 && (
                                            <div className="category-links">
                                                {post.categories.map((category) => (
                                                    <a key={post.key} role="button" href={category.link}
                                                       className="cgds btn btn-primary btn-sm category-link">
                                                        {category.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                        <div className="card-link-wrapper">
                                            <a className="card-link blog-btn" href={post.link}>
                                                <i className="bi bi-arrow-right-circle-fill"></i>
                                                ចុចអានបន្ថែម
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <a className="carousel-control-prev" href={`#${blockId}`}  role="button" data-slide="prev">
                <img src={ChevronIcon} className="carousel-control-prev-icon" alt="Previous" aria-hidden="true"> </img>
            </a>
            <a className="carousel-control-next" href={`#${blockId}`}  role="button" data-slide="next">
                <img src={ChevronIcon} className="carousel-control-next-icon" alt="Next" aria-hidden="true"> </img>
            </a>
        </div>
    );
}

export default save;
