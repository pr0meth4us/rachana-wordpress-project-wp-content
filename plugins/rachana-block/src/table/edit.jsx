import { PanelBody, TextControl, Button, SelectControl, RangeControl } from "@wordpress/components";
import { InspectorControls, RichText, useBlockProps } from "@wordpress/block-editor";
import { plus, trash } from '@wordpress/icons';

const edit = ({ attributes, setAttributes }) => {
    const { table } = attributes;
    const blockProps = useBlockProps();

    const customizeTable = (key, value) => {
        setAttributes({ table: { ...table, [key]: value } });
    };

    const addRow = () => {
        // Determine the number of cells based on the first row
        const numberOfCells = table.rows[0].cells.length;
        const newRow = { cells: Array(numberOfCells).fill("") };
        setAttributes({ table: { ...table, rows: [...table.rows, newRow] } });
    };

    const addColumn = () => {
        const updatedRows = table.rows.map((row) => ({
            ...row,
            cells: [...row.cells, ""],
        }));
        // Update the number of columns in the table
        setAttributes({ table: { ...table, columns: table.rows[0].cells.length + 1, rows: updatedRows } });
    };

    const removeColumn = columnIndex => {
        const updatedRows = table.rows.map(row => ({
            ...row,
            cells: row.cells.filter((_, index) => index !== columnIndex)
        }));
        // Update the number of columns in the table
        setAttributes({ table: { ...table, columns: table.rows[0].cells.length - 1, rows: updatedRows } });
    };

    const removeRow = rowIndex => {
        const updatedRows = table.rows.filter((_, index) => index !== rowIndex);
        setAttributes({ table: { ...table, rows: updatedRows } });
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
                                <Button isSmall icon={trash} onClick={() => removeColumn(cellIndex)} />
                            </th>
                        ))}
                        <th>
                            <Button isSmall icon={plus} onClick={addColumn} />
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
                            <td>
                                <Button isSmall icon={trash} onClick={() => removeRow(rowIndex)} />
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={table.columns + 1} style={{border: "none"}}>
                            <Button isSmall icon={plus} onClick={addRow}></Button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default edit;
