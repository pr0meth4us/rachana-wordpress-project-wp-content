import { useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
    const { tableItems } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            {tableItems.map((table, tableIndex) => (
                <div key={tableIndex} className={`table-responsive${table.style === "table-responsive" ? "" : "-lg"}`}>
                    <table className={`table ${table.style}`} style={{ width: `${table.width}%` }}>
                        <caption>{table.caption}</caption>
                        <thead>
                        <tr>
                            {Array.from({ length: table.columns }, (_, cellIndex) => (
                                <th key={cellIndex} scope="col">{table.rows[0].cells[cellIndex] || ""}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {table.rows.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {Array.from({ length: table.columns }, (_, cellIndex) => (
                                    <td key={cellIndex}>{row.cells[cellIndex] || ""}</td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default save;
