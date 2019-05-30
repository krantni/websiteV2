import * as React from 'react';
import { Burger } from 'components/TopBurgers/Burger/Burger';
import { Job } from 'components/Experience/Job/Job';
import { School } from 'components/Education/School/School';

const DataContext = React.createContext<{
  jobs: Job[];
  burgers: Burger[];
  schools: School[];
}>({ jobs: [], burgers: [], schools: [] });

export const useDataContext = () => {
  return React.useContext(DataContext);
};

const DataProvider = ({ children }: Props) => {
  const [state, updateState] = React.useState<{
    jobs: Job[];
    burgers: Burger[];
    schools: School[];
  }>({ jobs: [], burgers: [], schools: [] });
  React.useEffect(() => {
    const burgerFetch = fetch('https://website-nk.firebaseio.com/burgers.json').then(
      results => results.json(),
    );
    const jobFetch = fetch('https://website-nk.firebaseio.com/jobs.json').then(results =>
      results.json(),
    );
    const schoolFetch = fetch('https://website-nk.firebaseio.com/schools.json').then(
      results => results.json(),
    );
    Promise.all([burgerFetch, jobFetch, schoolFetch]).then(([burgers, jobs, schools]) => {
      updateState({
        burgers,
        jobs,
        schools,
      });
    });
  }, []);
  return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
};

export default DataProvider;

interface Props {
  children: React.ReactNode;
}
