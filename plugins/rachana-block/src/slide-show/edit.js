import { RangeControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';
import { fetchPosts } from "../api";

const edit = ({ attributes, setAttributes }) => {
    const blockProps = useBlockProps();
    const { postCount } = attributes;

    useEffect(() => {
        fetchPosts(postCount)
            .then(({ posts, id }) => {
                setAttributes({ posts: posts, id: id });
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, [postCount]);


    return (
        <div {...blockProps}>
            <h2>Latest Posts Slide Show</h2>
            <RangeControl
                label="Number of Posts"
                value={postCount}
                onChange={(value) => setAttributes({ postCount: value })}
                min={1}
                max={20}
            />
            <p>This block will display a slide show of the latest {postCount} posts.</p>
        </div>
    );
};

export default edit;
