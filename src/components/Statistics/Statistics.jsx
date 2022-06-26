import PropTypes from 'prop-types';

export const Statistics = ({title, items }) => {
    
    return (
        <section>
            <h2>{title}</h2>
        <ul>
            {items.map(item => (
                <li key={item.id}>
      <span>{item.label}</span>
      <span>{item.percentage} %</span>
    </li>
            )
                )}

            </ul>
            </section>
    )
}

Statistics.protTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
}