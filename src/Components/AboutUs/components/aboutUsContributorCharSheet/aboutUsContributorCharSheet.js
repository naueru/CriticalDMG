// React
import React from 'react';

// Libraries
import Proptypes from 'prop-types';

// Components
import Branding from '../../../branding';
import ConversationalDots from '../../../characterSheet/components/conversationalDots';
import RowList from '../../../characterSheet/components/rowList';

// Styles
import styles from './aboutUsContributorCharSheet.module.scss';


const _capitalize = require('lodash/capitalize');
const _get = require('lodash/get');

const getBaseSheet = (attributes = {}, skills = {}) => {
  const
  physical      = attributes.physical || {},
  str           = physical.str || {},
  dex           = physical.dex || {},
  sta           = physical.sta || {},
  social        = attributes.social || {},
  cha           = social.cha || {},
  man           = social.man || {},
  com           = social.com || {},
  mental        = attributes.mental || {},
  int           = mental.int || {},
  wit           = mental.wit || {},
  res           = mental.res || {},
  programming   = skills.programming || {},
  fronEndDev    = programming.fronEndDev || {},
  backEndDev    = programming.backEndDev || {},
  unitTest      = programming.unitTest || {},
  testing       = skills.testing || {},
  dataBase      = testing.dataBase || {},
  manualTesting = testing.manualTesting || {},
  autoTesting   = testing.autoTesting || {},
  others        = skills.others || {},
  leadership    = others.leadership || {},
  agile         = others.agile || {},
  design        = others.design || {};

  return {
    attributes: {
      physical: {
        str: {
          label: str.label,
          description: str.description,
        },
        dex: {
          label: dex.label,
          description: dex.description,
        },
        sta: {
          label: sta.label,
          description: sta.description,
        }
      },
      social: {
        cha: {
          label: cha.label,
          description: cha.description,
        },
        man: {
          label: man.label,
          description: man.description,
        },
        com: {
          label: com.label,
          description: com.description,
        }
      },
      mental: {
        int: {
          label: int.label,
          description: int.description,
        },
        wit: {
          label: wit.label,
          description: wit.description,
        },
        res: {
          label: res.label,
          description: res.description,
        }
      }
    },
    skills: {
      programming: {
        fronEndDev: {
          label: fronEndDev.label,
          description: fronEndDev.description,
        },
        backEndDev:{
          label: backEndDev.label,
          description: backEndDev.description,
        },
        unitTest: {
          label: unitTest.label,
          description: unitTest.description,
        }
      },
      testing: {
        dataBase: {
          label: dataBase.label,
          description: dataBase.description,
        },
        manualTesting:{
          label: manualTesting.label,
          description: manualTesting.description,
        },
        autoTesting: {
          label: autoTesting.label,
          description: autoTesting.description,
        }
      },
      others: {
        leadership: {
          label: leadership.label,
          description: leadership.description,
        },
        agile:{
          label: agile.label,
          description: agile.description,
        },
        design: {
          label: design.label,
          description: design.description,
        }
      }
    }
  };
};

const renderCollection = (key, contributor = {}, baseSheet = {}, translations = {}) => {
  const
    collection = baseSheet[key],
    title = translations.title;
  let
    result = [],
    categoryIndex = 0;
  for (let category in collection) {
    let list = [],
      entryIndex = 0;
    const categoryLabel = _get(translations, `${category}.title`, category);
    for (let entry in collection[category]) {
      const params = {
        label       : _get(collection, `${category}.${entry}.label`, ''),
        description : _get(collection, `${category}.${entry}.description`, ''),
        value       : _get(contributor, `${key}.${category}.${entry}`, ''),
        max         : 5
      };

      list.push(<ConversationalDots key={`ContributorCharacterSheet_entry_key_${entryIndex}`} {...params} />)
      entryIndex++;
    }
    result.push(<div key={`ContributorCharacterSheet_category_key_${categoryIndex}`} className={styles.attrCategory}>
      <h4 className={styles.categoryTitle}>{_capitalize(categoryLabel)}</h4>
      {list}
      </div>);
    categoryIndex++;
  }
  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      <div className={styles[key]}>
        {result}
      </div>
    </section>
  );
};

const AboutUsContributorCharSheet = ({ contributor, onLeave, translations }) => {
  const
  aboutUsTranslations       = translations.aboutUs || {},
  contributorsTranslations  = aboutUsTranslations.contributors || {},
  sheetTranslations         = contributorsTranslations.sheet || {},
  dataTranslations          = sheetTranslations.data || {},
  nameLabel                 = dataTranslations.name,
  teamLabel                 = dataTranslations.team,
  genderLabel               = dataTranslations.gender,
  healthLabel               = sheetTranslations.health,
  willpowerLabel            = sheetTranslations.willpower,
  attributesTranslations    = sheetTranslations.attributes || {},
  skillsTranslations        = sheetTranslations.skills || {},
  health = {
    label: healthLabel,
    value: contributor.health,
    max: 5,
    alignment: 'column',
    size: 'big'
  },
  willpower = {
    label: willpowerLabel,
    value: contributor.willpower,
    max: 5,
    alignment: 'column',
    size: 'big'
  },
  baseSheet = getBaseSheet(attributesTranslations, skillsTranslations);

  return (
    <article className={styles.sheetContainer} onMouseLeave={onLeave}>
      <Branding
        logoSize={{ width: '6rem', height: '6rem' }}
        alignment="row"
        shadow
      />
      <ul className={styles.dataList}>
        <li className={styles.data}>
          <span className={styles.label}>{nameLabel} </span>{contributor.name}
        </li>
        <li className={styles.data}>
          <span className={styles.label}>{teamLabel} </span>{contributor.team}
        </li>
        <li className={styles.data}>
          <span className={styles.label}>{genderLabel} </span>{contributor.gender}
        </li>
      </ul>
      {renderCollection('attributes', contributor, baseSheet, attributesTranslations)}
      {renderCollection('skills', contributor, baseSheet, skillsTranslations)}
      <section className={styles.hpWill}>
          <ConversationalDots {...health} />
          <ConversationalDots {...willpower}/>
      </section>
      <RowList label={'Inventory'} list={contributor.inventory} />
    </article>
  );
};

AboutUsContributorCharSheet.propTypes = {
  contributor: Proptypes.object,
  onLeave: Proptypes.func
};

AboutUsContributorCharSheet.defaultProps = {
  contributor: {},
  onLeave: () => {}
};

export default AboutUsContributorCharSheet;
