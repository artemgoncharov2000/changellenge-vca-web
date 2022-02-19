import React, {FC, useState} from 'react';
import {IVacancyProps} from "./types";
import map from 'lodash/map';
import VacancyCard from "./VacancyCard/VacancyCard";
import './Vacancy.scss';
import useGetVacancies from "../../../hooks/use-get-vacancies";

const Vacancy: FC<IVacancyProps> = (props) => {

  const vacancies = useGetVacancies(0);

  return (
      <div className={'vacancy-tab'}>
          {map(vacancies, (vacancy) =>
              <VacancyCard
                  key={vacancy.id}
                  thumbnailUrl={vacancy.thumbnailUrl}
                  title={vacancy.title}
                  location={vacancy.location}
                  companyName={vacancy.companyName}
                  link={vacancy.link}
              />
          )}
          <button type="button" className={'vacancy-tab__button'}>{"Загрузить еще"}</button>
      </div>
  );
};

export default Vacancy;
