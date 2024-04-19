import { PanelBody, TextControl, ColorPicker, Button } from "@wordpress/components";
import { InspectorControls, MediaUpload, RichText } from "@wordpress/block-editor";
import defaultAttr from "./defaultAttr.json";
import { addNewBlockItem, customizeBlockItem } from "../blockHelpers";
const edit = ({ attributes, setAttributes }) => {
    const { cardItems } = attributes;

    const addItem = () => {
        setAttributes({
            cardItems: addNewBlockItem(cardItems, defaultAttr)
        });
    };

    const customizeItem = (index, key, value) => {
        setAttributes({
            cardItems: customizeBlockItem(cardItems, index, key, value)
        });
    };

    return (
      <div>
          <InspectorControls>
              <PanelBody title="Card Settings">
                  <Button isSecondary onClick={addItem}>
                      Add Card Item
                  </Button>
              </PanelBody>
          </InspectorControls>
          <div className="wrapper-fluid">
              <section className="page-component-overview">
                  <article>
                      <div className="cgds page-component-item-wrapper picture-item" >

                          {cardItems.map((item, index) => (
                            <div className="cgds card" key={index}>
                                <InspectorControls>
                                    <PanelBody title={`Card Item ${index + 1}`}>
                                        <MediaUpload
                                          onSelect={(media) => {
                                              const imageUrl = media.url;
                                              customizeItem(index, "imageUrl", imageUrl);
                                          }}
                                          value={item.imageUrl || ""}
                                          render={({ open }) => (
                                            <Button
                                              onClick={open}
                                              className={`button button-large ${!item.imageUrl ? "button-secondary" : ""}`}
                                            >
                                                {!item.imageUrl ? "Upload Image" : "Change Image"}
                                            </Button>
                                          )}
                                        />
                                        <TextControl
                                          label="Font"
                                          value={item.font}
                                          onChange={(value) => customizeItem(index, "font", value)}
                                        />


                                        <TextControl
                                          label="Card Title"
                                          value={item.title}
                                          onChange={(value) => customizeItem(index, "title", value)}
                                        />

                                        <TextControl
                                          label="Card Text"
                                          value={item.content}
                                          onChange={(value) => customizeItem(index, "content", value)}
                                        />

                                        <TextControl
                                          label="Card Href"
                                          value={item.href}
                                          onChange={(value) => customizeItem(index, "href", value)}
                                        />
                                        <TextControl
                                          label="Link Guide"
                                          value={item.linkText}
                                          onChange={(value) => customizeItem(index, "linkText", value)}
                                        />

                                        <div className="components-base-control">
                                            <label className="components-base-control__label">Body Text Color</label>
                                            <ColorPicker
                                              color={item.contentColor}
                                              onChangeComplete={(value) => customizeItem(index, "contentColor", value.hex)}
                                              disableAlpha
                                            />
                                        </div>

                                        <div className="components-base-control">
                                            <label className="components-base-control__label">Card Title Color</label>
                                            <ColorPicker
                                              color={item.titleColor}
                                              onChangeComplete={(value) => customizeItem(index, "titleColor", value.hex)}
                                              disableAlpha
                                            />
                                        </div>
                                    </PanelBody>
                                </InspectorControls>

                                <div className="cgds card">

                                    <img className="card-img-top" src={item.imageUrl} alt={`Card ${index} image`}/>

                                    <div className="card-body">

                                        <a style={{color: item.titleColor, fontFamily: item.font}}
                                           className="stretched-link link-primary" href={item.href}
                                           onClick={(e) => {
                                               e.preventDefault();
                                           }}>

                                            <RichText
                                              className="h5 text-primary card-title"
                                              value={item.title}
                                              onChange={value => customizeItem(index, "title", value)}
                                              placeholder="Add card title"
                                            />

                                        </a>
                                        <p style={{color: item.contentColor, fontFamily: item.font}}>

                                            <RichText
                                              className="card-text"
                                              value={item.content}
                                              onChange={value => customizeItem(index, "content", value)}
                                              placeholder="Add card description"
                                            />
                                        </p>
                                        <a className="card-link" href="#">
                                            <i className="bi bi-arrow-right-circle-fill"></i>
                                            <RichText
                                              value={item.linkText}
                                              onChange={value => customizeItem(index, "linkText", value)}
                                              placeholder="Add link guide"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                          ))}
                      </div>
                  </article>
              </section>
          </div>
      </div>
    );
};

export default edit;
