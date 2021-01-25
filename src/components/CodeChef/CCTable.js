import React from 'react';

function CCTable(props) {
  const { search, category, contestList } = props;
  const categoryLowerCase = category.toLowerCase();
  const gapBetweenDates = category === 'Challenge' ? 10 : '';
  let index = 0;
  return (
    <div id="cc-container">
      <div className="row mx-0 py-3">
        <div className="col-md-12 px-1  order-12">
          <table className="table table-bordered bg-white shadow-sm rounded" id="cc-table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Code</th>
                <th scope="col">Name</th>
                <th scope="col">Phase</th>
                <th scope="col">Start Time</th>
                <th scope="col">End Time</th>
              </tr>
            </thead>
            <tbody>
              {contestList.map((contest) => {
                const { code, name, link, startTime, endTime, phase } = contest;
                const gap = endTime.substr(0, 2) - startTime.substr(0, 2);
                const searchString = [code, name].join('#');
                if (
                  searchString.indexOf(search) !== -1 &&
                  name.toLowerCase().indexOf(categoryLowerCase) !== -1 &&
                  (!gapBetweenDates || gap >= gapBetweenDates)
                ) {
                  index += 1;
                  return (
                    <tr key={code}>
                      <td>{index}</td>
                      <td>{code}</td>
                      <td>
                        <a rel="noopener noreferrer" target="_blank" href={link}>
                          {name}
                        </a>
                      </td>
                      <td>{phase}</td>
                      <td>{startTime}</td>
                      <td>{endTime}</td>
                    </tr>
                  );
                }
                return <React.Fragment key={code} />;
              })}
            </tbody>
          </table>
        </div>

        <div className="col-md-12 px-1 order-1">
          <div className="alert alert-primary py-1">
            <div className="row mx-0">
              <div className="col-md col-auto">
                <b> Total Contest : </b>
                {index}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CCTable;
