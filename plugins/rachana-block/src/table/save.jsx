import { useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
    const { table } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            <div className={`table-responsive${table.style === "table-responsive" ? "" : "-lg"}`}>
                <table className={`table ${table.style}`} style={{ width: `${table.width}%` }}>
                    <caption>{table.caption}</caption>
                    <thead>
                    <tr>
                        {table.rows[0].cells.map((cell, cellIndex) => (
                            <th key={cellIndex} scope="col">{cell}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {table.rows.slice(1).map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.cells.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell}</td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default save;
