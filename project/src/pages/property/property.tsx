import { Navigate, useParams } from 'react-router-dom';
import Form from '../../components/form/form';
import Logo from '../../components/logo/logo';
import { Offers } from '../../types/offer';
import { Reviews } from '../../types/review';
import {convertMarkToPercents} from '../../utils';
import ReviewsList from '../../components/reviews-list/reviews-list';
import Map from '../../components/map/map';
import CardList from '../../components/card-list/card-list';

type PropertyProps = {
  offers: Offers;
  reviews: Reviews;
}
function Property({ offers, reviews }: PropertyProps): JSX.Element {
  const { id } = useParams();

  if (id && Array.isArray(offers)) {
    const currentOffer = offers.find((offer) => offer.id === +id);

    if (!currentOffer) {
      return <Navigate to='*' />;
    }
    const renderImages = currentOffer.images.map((image) =>
      (
        <div key={image} className="property__image-wrapper">
          <img className="property__image" src={image} alt="Studio" />
        </div>
      )
    );

    const renderGoods = currentOffer.goods.map((goodsItem) =>
      <li key={goodsItem} className="property__inside-item">{goodsItem}</li>
    );

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Logo />
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <div className="header__nav-profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </div>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="/">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {renderImages}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {currentOffer.isPremium ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                  : ''}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {currentOffer.title}
                  </h1>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: convertMarkToPercents(currentOffer.rating) }}></span>
                    <span className="visually-hidden">{currentOffer.rating}</span>
                  </div>
                  <span className="property__rating-value rating__value">{currentOffer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {currentOffer.type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {currentOffer.bedrooms} {currentOffer.bedrooms > 1 ? 'Bedrooms' : 'Bedroom'}
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {currentOffer.maxAdults} {currentOffer.maxAdults > 1 ? 'adults' : 'adult'}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{currentOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {renderGoods}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {currentOffer.host.name}
                    </span>
                    {currentOffer.host.isPro === true ? <span className="property__user-status">Pro</span> : ''}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {currentOffer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ul className="reviews__list">
                    <ReviewsList reviews={reviews}/>
                  </ul>
                  <Form/>
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map offer={offers[0]} offers={offers} selectedOffer={currentOffer}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <CardList offers={offers.filter((offer) => offer !== currentOffer)} setActiveCard={() => null}/>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  } else {
    return <Navigate to='*' />;
  }
}

export default Property;
