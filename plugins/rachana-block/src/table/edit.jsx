import { PanelBody, TextControl, Button, SelectControl, RangeControl } from "@wordpress/components";
import { InspectorControls, RichText, useBlockProps } from "@wordpress/block-editor";

const edit = ({ attributes, setAttributes }) => {
    const { table } = attributes;
    const blockProps = useBlockProps();

    const customizeTable = (key, value) => {
        setAttributes({ table: { ...table, [key]: value } });
    };

    const addRow = () => {
        const newRow = { cells: Array(table.columns).fill("") };
        setAttributes({ table: { ...table, rows: [...table.rows, newRow] } });
    };

    const addColumn = () => {
        const updatedRows = table.rows.map((row) => ({
            ...row,
            cells: [...row.cells, ""],
        }));
        setAttributes({ table: { ...table, columns: table.columns + 1, rows: updatedRows } });
    };

    const customizeCell = (rowIndex, cellIndex, value) => {
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
        setAttributes({ table: { ...table, rows: updatedRows } });
    };

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title="Table Settings">
                    <TextControl
                        label="Caption"
                        value={table.caption}
                        onChange={(value) => customizeTable("caption", value)}
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
                        onChange={(value) => customizeTable("style", value)}
                    />
                    <RangeControl
                        label="Table Width"
                        value={table.width}
                        onChange={(value) => customizeTable("width", value)}
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
                        onChange={(value) => customizeTable("caption", value)}
                        placeholder="Enter table caption..."
                    />
                    <thead>
                    <tr>
                        {table.rows[0].cells.map((_, cellIndex) => (
                            <th key={cellIndex} scope="col">
                                <RichText
                                    tagName="span"
                                    value={table.rows[0].cells[cellIndex]}
                                    onChange={(value) => customizeCell(0, cellIndex, value)}
                                    placeholder={`Header ${cellIndex + 1}`}
                                />
                            </th>
                        ))}
                        <th>
                            <Button isSecondary onClick={addColumn}>
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
                                        onChange={(value) => customizeCell(rowIndex + 1, cellIndex, value)}
                                        placeholder={`Cell ${cellIndex + 1}`}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={table.columns}>
                            <Button isSecondary onClick={addRow}>
                                Add Row
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default edit;
