import React from 'react'

import ImageHero from 'assets/images/img-hero.jpg'
import ImageHero_ from 'assets/images/img-frame.jpg'
import IconCities from 'assets/images/icon/icon-cities.svg'
import IconTraveler from 'assets/images/icon/icon-traveler.svg'
import IconTreasures  from 'assets/images/icon/icon-treasure.svg'

import Button from 'elements/Button'

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop -30,
            behavior: "smooth"

        })
    }

    function numberFormat(number) {
        const formatNumbering = new Intl.NumberFormat("id-ID");
            return formatNumbering.format(number);
    }

    return (
        <section className="container pt-4">
            <div className="row align-items-center">
                <div className="col-auto pr-5" style={{width: 530}}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Forget Busy work, <br/>
                        Start Next Vacation
                    </h1>
                    <p className="mb-4 font-weight-light text-gray-500 w-75" 
                     style={{lineHeight:"170%"}}>
                        we provide what you need to enjoy  your
                        holiday with family. Time to make another memorable moments.
                    </p>
                    <Button className="btn px-5" hasShadow 
                     isPrimary
                     onClick={showMostPicked}
                     >
                        Show Me Now
                    </Button>
                    <div className="row" style={{marginTop: 80}}>
                        <div className="col-auto" style={{marginRight: 35}}>
                            <img 
                             width="36" 
                             height="36" 
                             src={IconTraveler} alt={`${props.data.travelers} Travelers`} />
                            <h6 className="mt-3">
                                {numberFormat(props.data.travelers)} 
                                <span className="text-gray-500 font-weight-light">
                                    travelers
                                </span>
                            </h6>
                        </div>
                        <div className="col-auto" style={{marginRight: 35}}>
                            <img 
                             width="36" 
                             height="36" 
                             src={IconTreasures} alt={`${props.data.treasures} Treasures`} />
                            <h6 className="mt-3">
                                {numberFormat(props.data.treasures)} 
                                <span className="text-gray-500 font-weight-light">
                                    treasures
                                </span>
                            </h6>
                        </div>
                        
                        <div className="col-auto">
                            <img 
                             width="36" 
                             height="36" 
                             src={IconCities} alt={`${props.data.cities} Cities`} />
                            <h6 className="mt-3">
                                {numberFormat(props.data.cities)} 
                                <span className="text-gray-500 font-weight-light">
                                    cities
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>

               <div className="col-6 pl-5">
               <div style={{ width: 520, height: 390 }}>
                       <img src={ImageHero_} 
                       alt="Room With couches frame" 
                       className="img-fluid position-absolute" 
                       style={{margin: '0 -15px -15px 0'}}
                       />
                       
                       <img src={ImageHero} 
                       alt="Room With couches" 
                       className="img-fluid position-absolute" 
                       style={{margin: '-30px 0 0 -30px', zindex: 1 }}
                       />


                   </div>
                </div> 

            </div>
        </section>
    )
}
