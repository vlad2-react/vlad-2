import React from 'react';
import classNames from 'classnames';
import {SectionTilesProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
                         className,
                         topOuterDivider,
                         bottomOuterDivider,
                         topDivider,
                         bottomDivider,
                         hasBgColor,
                         invertColor,
                         pushLeft,
                         ...props
                       }) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Партнеры',
    paragraph: 'Заказчиками «ВЛАД-2» в Украине являются известные международные компании'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content"/>
          <div className='container-sm'>

            <div className="partners-list">

              <Image
                className="has-shadow"
                src={require('./../../assets/images/partners/partner-1.png')}
                alt="partner" />
              <Image
                className="has-shadow"
                src={require('./../../assets/images/partners/partner-2.png')}
                alt="partner" />
              <Image
                className="has-shadow"
                src={require('./../../assets/images/partners/partner-3.png')}
                alt="partner" />
              <Image
                className="has-shadow"
                src={require('./../../assets/images/partners/partner-4.png')}
                alt="partner" />
              <Image
                className="has-shadow"
                src={require('./../../assets/images/partners/partner-5.png')}
                alt="partner" />
              <Image
                className="has-shadow"
                src={require('./../../assets/images/partners/partner-6.png')}
                alt="partner" />
              <Image
                className="has-shadow"
                src={require('./../../assets/images/partners/partner-7.png')}
                alt="partner" />
              <Image
                className="has-shadow"
                src={require('./../../assets/images/partners/partner-8.png')}
                alt="partner" />
              <Image
                className="has-shadow"
                src={require('./../../assets/images/partners/partner-9.png')}
                alt="partner" />
              <Image
                className="has-shadow"
                src={require('./../../assets/images/partners/partner-10.png')}
                alt="partner" />
              <Image
                className="has-shadow"
                src={require('./../../assets/images/partners/partner-11.png')}
                alt="partner" />
              <Image
                className="has-shadow"
                src={require('./../../assets/images/partners/partner-12.png')}
                alt="partner" />



            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;