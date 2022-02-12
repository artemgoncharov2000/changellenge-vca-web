import React, { FC } from 'react';
import {IVacancyProps} from "./types";
import map from 'lodash/map';
import VacancyCard from "./VacancyCard/VacancyCard";
import './Vacancy.scss';
const vacancies = [
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Yandex_logo_2021_Russian.svg/512px-Yandex_logo_2021_Russian.svg.png',
        title: 'Тестировщик по автоматизированному тестированияю (QA Automation Engineer)',
        city: 'Москва',
        companyName: 'Яндекс'
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Yandex_logo_2021_Russian.svg/512px-Yandex_logo_2021_Russian.svg.png',
        title: 'Тестировщик по автоматизированному тестированияю (QA Automation Engineer)',
        city: 'Москва',
        companyName: 'Яндекс'
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Yandex_logo_2021_Russian.svg/512px-Yandex_logo_2021_Russian.svg.png',
        title: 'Тестировщик по автоматизированному тестированияю (QA Automation Engineer)',
        city: 'Москва',
        companyName: 'Яндекс'
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Yandex_logo_2021_Russian.svg/512px-Yandex_logo_2021_Russian.svg.png',
        title: 'Тестировщик по автоматизированному тестированияю (QA Automation Engineer)',
        city: 'Москва',
        companyName: 'Яндекс'
    },
]
const Vacancy: FC<IVacancyProps> = (props) => {

  return (
      <div className={'vacancy-tab'}>
          {map(vacancies, (vacancy, index) =>
              <VacancyCard
                  key={index}
                  imageUrl={vacancy.imageUrl}
                  title={vacancy.title}
                  city={vacancy.city}
                  companyName={vacancy.companyName}
              />
          )}
          <button type="button" className={'vacancy-tab__button'}>{"Загрузить еще"}</button>
      </div>
  );
};

export default Vacancy;
