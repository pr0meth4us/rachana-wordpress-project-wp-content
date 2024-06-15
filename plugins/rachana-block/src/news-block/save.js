import React from 'react';
import moment from 'moment';
import { useBlockProps } from "@wordpress/block-editor";
import ChevronIcon from "../../assets/img/icons/chevron-right-normal.svg";
import TimeIcon from "../../assets/img/icons/time-icon-primary-color.svg";
import PersonIcon from "../../assets/img/icons/person-icon-primary-color.svg";

const save = ({ attributes, includeImage }) => {
    const { posts, id, categoryLink, categoryName } = attributes;
    const blockProps = useBlockProps.save();
    const blockId = `postCarousel-${id}`;
    const chunkArray = (array, size) => {
        return array.reduce((acc, _, i) => {
            if (i % size === 0) acc.push(array.slice(i, i + size));
            return acc;
        }, []);
    };

    const getRelativeTime = (date) => {
        return moment(date).fromNow();
    };

    const renderPostContent = (post) => {
        return (
            <div key={post.key} className={`cgds card ${includeImage ? 'image' : 'imageless'}`}>
                {includeImage && post.imageLink && (
                    <img className="card-img-top img-fluid" src={post.imageLink} alt="Post Image" />
                )}
                <div className="card-body">
                    <p className="card-text">
                        <img src={TimeIcon} style={{ fill: 'var(--cgds-primary)' }} alt="Time Icon" />
                        <small className="text-muted">{" "}{getRelativeTime(post.date)}{" "}</small>
                        <img src={PersonIcon} className="slide-show-icon" alt="Person Icon" />
                        <small className="text-muted card-text-muted">{" "}{post.author}</small>
                    </p>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></p>
                    <a className="card-link blog-btn" href={post.link}>
                        <i className="bi bi-arrow-right-circle-fill"></i>
                        ចុចអានបន្ថែម
                    </a>
                </div>
            </div>
        );
    };

    const chunks = chunkArray(posts, 3);

    return (
        <div {...blockProps} id={blockId} className="cgds news carousel" data-ride="carousel" data-interval="false">
            <div className="w block-title text-left mb-1 mb-sm-2 mb-md-3 mb-lg-4">
                <h2>{categoryName}</h2>
            </div>
            <div className="carousel-inner">
                {chunks.map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className={`carousel-item news-chunk ${chunkIndex === 0 ? 'active' : ''}`}>
                        {chunk.map((post) => renderPostContent(post))}
                    </div>
                ))}
            </div>
            <div className="news-nav d-flex flex-wrap align-items-center justify-content-between">
                <ol className="carousel-indicators d-flex align-items-center flex-grow-1">
                    <li data-slide-to="0"  >
                        <a className="carousel-control-prev" href={`#${blockId}`} role="button" data-slide="prev">
                            <img src={ChevronIcon} className="carousel-control-prev-icon" alt="Previous" aria-hidden="true" />
                        </a>
                    </li>
                    {chunks.slice(0, -2).map((chunk, index) => (
                        <li key={index} data-target={`#${blockId}`} data-slide-to={index} className={index === 0 ? 'active' : ''}></li>
                    ))}
                    <li>
                        <a className="carousel-control-next" href={`#${blockId}`} role="button" data-slide="next">
                            <img src={ChevronIcon} className="carousel-control-next-icon" alt="Next" aria-hidden="true" />
                        </a>
                    </li>
                    <a role="button" href={categoryLink} className="cgds btn-sm btn btn-primary">ចុចមើលទាំងអស់</a>
                </ol>
            </div>
        </div>
    );
};

export default save;
