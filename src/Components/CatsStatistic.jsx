function CatsStatistic({ stats, groupStats }) {

    return (

        <div className='cats-stats'>
            <span>Breed quantity: <i>{stats.count}</i></span>
            <span>Size: <i>{stats.size.toFixed(2)}</i> kg</span>
            <span>Average: <i>{stats.average.toPrecision(3)}</i> kg</span>
            {groupStats.map((s => <span key={s.breed}><i>{s.breed}: </i><b>{s.count}</b></span>))}
        </div>


    );

}
export default CatsStatistic;