import { useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
    const { table } = attributes;
    const blockProps = useBlockProps.save();
    const tableSize = `${table.style === "table-responsive"? "table-responsive" : "table-responsive-lg"}`;
    const tableClass = `table ${table.style} table-container`;

    if (table.columns === 0) {
        return null;
    } else {
        return (
            <div {...blockProps}>
                <div className="w block-title text-left mb-1 mb-sm-2 mb-md-3 mb-lg-4">
                    <h2>{table.caption}</h2>
                </div>
                <div className={tableSize}>
                    <table className={tableClass} style={{color: table.cellTextColor, width:`${table.width}%`}}>
                        <caption>{table.caption}</caption>
                        <thead>
                        <tr>
                            {table.rows[0].cells.map((cell, cellIndex) => (
                                <th key={cellIndex} scope="col" style={{ backgroundColor: table.headerColors?.[cellIndex] || 'transparent', color: table.headerTextColor }}>
                                    {cell}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {table.rows.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.cells.map((cell, cellIndex) => (
                                    <td key={cellIndex}>
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
};

export default save;
