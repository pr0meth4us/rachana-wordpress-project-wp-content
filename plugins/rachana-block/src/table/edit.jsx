import { PanelBody, TextControl, Button, SelectControl, RangeControl } from "@wordpress/components";
import { InspectorControls, RichText, useBlockProps } from "@wordpress/block-editor";
import defaultAttr from "./defaultAttr.json";
import { addNewBlockItem, customizeBlockItem } from "../blockHelpers";

const edit = ({ attributes, setAttributes }) => {
    const { tableItems } = attributes;
    const blockProps = useBlockProps();

    const addTable = () => {
        setAttributes({
            tableItems: addNewBlockItem(tableItems, defaultAttr.tableItems[0]),
        });
    };

    const customizeTable = (tableIndex, key, value) => {
        setAttributes({
            tableItems: customizeBlockItem(tableItems, tableIndex, key, value),
        });
    };

    const addRow = (tableIndex) => {
        const newRow = { cells: Array(tableItems[tableIndex].columns).fill("") };
        const updatedTableItems = tableItems.map((table, index) => {
            if (index === tableIndex) {
                return {
                    ...table,
                    rows: [...table.rows, newRow],
                };
            }
            return table;
        });
        setAttributes({ tableItems: updatedTableItems });
    };

    const addColumn = (tableIndex) => {
        const updatedTableItems = tableItems.map((table, index) => {
            if (index === tableIndex) {
                const updatedRows = table.rows.map((row) => ({
                    ...row,
                    cells: [...row.cells, ""],
                }));
                return {
                    ...table,
                    columns: table.columns + 1,
                    rows: updatedRows,
                };
            }
            return table;
        });
        setAttributes({ tableItems: updatedTableItems });
    };

    const customizeCell = (tableIndex, rowIndex, cellIndex, value) => {
        const updatedTableItems = tableItems.map((table, tIndex) => {
            if (tIndex === tableIndex) {
                const updatedRows = table.rows.map((row, rIndex) => {
                    if (rIndex === rowIndex) {
                        const updatedCells = row.cells.map((cell, cIndex) => {
                            if (cIndex === cellIndex) {
                                return value;
                            }
                            return cell;
                        });
                        return { ...row, cells: updatedCells };
                    }
                    return row;
                });
                return { ...table, rows: updatedRows };
            }
            return table;
        });
        setAttributes({ tableItems: updatedTableItems });
    };

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title="Table Settings">
                    <Button isSecondary onClick={addTable}>
                        Add Table
                    </Button>
                </PanelBody>
            </InspectorControls>

            {tableItems.map((table, tableIndex) => (
                <div key={tableIndex}>
                    <InspectorControls>
                        <PanelBody title={`Table ${tableIndex + 1}`}>
                            <TextControl
                                label="Caption"
                                value={table.caption}
                                onChange={(value) => customizeTable(tableIndex, "caption", value)}
                            />
                            <SelectControl
                                label="Table Style"
                                value={table.style}
                                options={[
                                    { label: "Default", value: "" },
                                    { label: "Small", value: "table-sm" },
                                    { label: "Bordered", value: "table-bordered" },
                                    { label: "Borderless", value: "table-borderless" },
                                    { label: "Hover", value: "table-hover" },
                                    { label: "Dark", value: "table-dark" },
                                ]}
                                onChange={(value) => customizeTable(tableIndex, "style", value)}
                            />
                            <RangeControl
                                label="Table Width"
                                value={table.width}
                                onChange={(value) => customizeTable(tableIndex, "width", value)}
                                min={0}
                                max={100}
                                step={10}
                            />
                        </PanelBody>
                    </InspectorControls>

                    <div className={`table-responsive${table.style === "table-responsive" ? "" : "-lg"}`}>
                        <table className={`table ${table.style}`} style={{ width: `${table.width}%` }}>
                            <RichText
                                tagName="caption"
                                value={table.caption}
                                onChange={(value) => customizeTable(tableIndex, "caption", value)}
                                placeholder="Enter table caption..."
                            />
                            <thead>
                            <tr>
                                {table.rows[0].cells.map((_, cellIndex) => (
                                    <th key={cellIndex} scope="col">
                                        <RichText
                                            tagName="span"
                                            value={table.rows[0].cells[cellIndex]}
                                            onChange={(value) => customizeCell(tableIndex, 0, cellIndex, value)}
                                            placeholder={`Header ${cellIndex + 1}`}
                                        />
                                    </th>
                                ))}
                                <th>
                                    <Button isSecondary onClick={() => addColumn(tableIndex)}>
                                        Add Column
                                    </Button>
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {table.rows.slice(1).map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    {row.cells.map((cell, cellIndex) => (
                                        <td key={cellIndex}>
                                            <RichText
                                                tagName="span"
                                                value={cell}
                                                onChange={(value) => customizeCell(tableIndex, rowIndex + 1, cellIndex, value)}
                                                placeholder={`Cell ${cellIndex + 1}`}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={table.columns}>
                                    <Button isSecondary onClick={() => addRow(tableIndex)}>
                                        Add Row
                                    </Button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default edit;
