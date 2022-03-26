import React, {FC, useState} from 'react';
import {IVacancyProps} from "./types";
import map from 'lodash/map';
import VacancyCard from "./VacancyCard/VacancyCard";
import './Vacancy.scss';
import { useGetSuggests } from '../../../hooks/use-get-suggests';
import { SuggestTypesEnum, VacanciesT } from '../../../types/suggest';

const Vacancy: FC<IVacancyProps> = () => {

  const {suggests: vacancies, isError, isLoading} = useGetSuggests<VacanciesT>(SuggestTypesEnum.vacancies, 0);

  const getPageState = () => {
      if (isLoading) {
          return <p>{"Загружаем данные..."}</p>;
      }
      if (isError) {
          return <p>{"Ошибка загрузки"}</p>;
      }
      if (vacancies) {
          return (
              <>
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
              </>
          )
      }

      return null;
  } 

  return (
      <div className={'vacancy-tab'}>
        {getPageState()}
      </div>
  );
};

export default Vacancy;
