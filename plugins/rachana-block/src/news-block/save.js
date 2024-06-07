import moment from 'moment';
import { useBlockProps } from "@wordpress/block-editor";
import ChevronIcon from "../../assets/img/icons/chevron-right-normal.svg";
import TimeIcon from "../../assets/img/icons/time-icon-primary-color.svg";
import PersonIcon from "../../assets/img/icons/person-icon-primary-color.svg";

const save = ({ attributes }) => {
    const { posts } = attributes;
    const blockProps = useBlockProps.save();
    const blockId = `postCarousel-${attributes.id}`;
    const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArr.push(array.slice(i, i + size));
        }
        return chunkedArr;
    };

    const getRelativeTime = (date) => {
        return moment(date).fromNow();
    };

    const chunks = chunkArray(posts, 3);

    return (
        <div {...blockProps} id={blockId} className="cgds news carousel" data-ride="carousel" data-interval="false">
            <div className="carousel-inner">
                {chunks.map((chunk, chunkIndex) => (
                    <div key={chunkIndex} className={`carousel-item news-chunk ${chunkIndex === 0 ? 'active' : ''}`}>
                        {chunk.map((post) => (
                            <div key={post.key} className="cgds card">
                                {post.imageLink &&
                                    <img className="card-img-top img-fluid" src={post.imageLink} alt="Post Image"/>}
                                <div className="card-body">
                                    <p className="card-text">
                                        <img src={TimeIcon} style={{fill: 'var(--cgds-primary'}}/>
                                        <small className="text-muted">{" "}{getRelativeTime(post.date)}{" "}</small>
                                        <img src={PersonIcon} className="slide-show-icon" alt="Person Icon"/>
                                        <small className="text-muted card-text-muted">{" "}{post.author}</small>
                                    </p>
                                    <p className="card-text" dangerouslySetInnerHTML={{__html: post.title.rendered}}></p>
                                    <a className="card-link blog-btn" href={post.link}>
                                        <i className="bi bi-arrow-right-circle-fill"></i>
                                        ចុចអានបន្ថែម
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="news-nav d-flex align-items-center justify-content-between">
                <ol className="carousel-indicators d-flex align-items-center">
                    {chunks.map((chunk, index) => (
                        <li key={index} data-target={`#${blockId}`} data-slide-to={index}
                            className={index === 0 ? 'active' : ''}></li>
                    ))}
                    <li>
                        <a className="carousel-control-next" href={`#${blockId}`} role="button" data-slide="next">
                            <img src={ChevronIcon} className="carousel-control-next-icon" alt="Next" aria-hidden="true"/>
                        </a>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default save;