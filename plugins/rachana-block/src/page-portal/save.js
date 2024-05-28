import { useBlockProps } from "@wordpress/block-editor";
import businessIcon from '../../assets/img/icons/business.svg';
import citizenIcon from '../../assets/img/icons/citizen.svg';
import newsIcon from '../../assets/img/icons/news.svg';
import subnationalIcon from '../../assets/img/icons/subnational.svg';
import tourismIcon from '../../assets/img/icons/tourism.svg';

const siteName = new URL(String(window.location)).hostname.split(".")[0];
const tourismUrl =  `https://demo.cambodia.gov.kh/tourism-location/${siteName}-km/`;
const cardData = [
    { id: 'citizen', icon: citizenIcon, url: "/citizen-km", text: "ប្រជាពលរដ្ឋ" },
    { id: 'business', icon: businessIcon, url: "/business-km", text: "អាជីវកម្ម" },
    { id: 'tourism', icon: tourismIcon, url: tourismUrl, text: "អ្នកទេសចរណ៍" },
    { id: 'subnational', icon: subnationalIcon, url: "/organization_type/organizations", text: "ព័ត៌មានមន្ទីរ-អង្គភាព" },
    { id: 'news', icon: newsIcon, url: "/ក្របខ័ណ្ឌអភិវឌ្ឍន៍ខេត្", text: "គម្រោងអភិវឌ្ឍន៍" }
];
const Card = ({ icon, url, text }) => (
    <div className="card cgds">
        <a className="card-img-top" href={typeof url === 'function' ? url() : url}>
            <img src={icon} alt={`${text} Icon`}/>
        </a>

        <div className="card-body">
            <a href={typeof url === 'function' ? url() : url}>
                <div className="icon-text">{text}</div>
            </a>
        </div>
    </div>
);

const save = () => {
    const blockProps = useBlockProps.save();
    return (
        <div {...blockProps} className="icon-container">
            {cardData.map((card) => <Card key={card.id} {...card} />)}
        </div>
    );
};
export default save;
