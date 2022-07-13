import React from 'react'
import Card from './Card';
import Card1 from './Card1';
import Pcard from './Pcard';
function Main_Props() {
    return (
        <div className="container mt-5">
            <div className="row">

                {/*
                <Card name="Ordinary Drink" desc="Optional alcohol" alt="Optional alcohol" img="https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"  />
                <Card name="Cocktail" desc="Alcoholic" alt="Alcoholic" img="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"  />
                <Card name="Shot"  desc="Layered in a shot glass" alt="Shot glass" img="https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg"  /> 
                
                <Card name="Cocktail" desc="Martini Glass" alt="Martini Glass" img="https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg"/>
                <Card name="Alcoholic" desc="Shot glass" alt="Shot glass" img="https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg" />    
                <Card name="New Era Drinks" desc="Alcoholic" alt="Alcoholic" img="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"  />
                */}

                {/*
                <Card1 name="Ordinary Drink" desc="Optional alcohol" alt="Optional alcohol" img="https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg"  />
                <Card1 name="Cocktail" desc="Alcoholic" alt="Alcoholic" img="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"  />
                <Card1 name="Shot"  desc="Layered in a shot glass" alt="Shot glass" img="https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg"  /> 
                
                 <Card1 name="Cocktail" desc="Martini Glass" alt="Martini Glass" img="https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg"/>
                 <Card1 name="Alcoholic" desc="Shot glass" alt="Shot glass" img="https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg" />    
                 <Card1 name="New Era Drinks" desc="Alcoholic" alt="Alcoholic" img="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"  />
                */  }
                
                
                <Pcard title="Nature" text="Best Nature image" button="Visit" img="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg" alt="Butturflies" /><Pcard title="Nature" text="Best Nature image" button="Visit" img="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg" alt="Butturflies" /><Pcard title="Nature" text="Best Nature image" button="Visit" img="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg" alt="Butturflies" /><Pcard title="Nature" text="Best Nature image" button="Visit" img="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg" alt="Butturflies" />
                <Pcard title="Nature" text="Best Nature image" button="Visit"  img="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg" alt="Butturflies"/><Pcard title="Nature" text="Best Nature image" button="Visit"  img="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg" alt="Butturflies"/><Pcard title="Nature" text="Best Nature image" button="Visit"  img="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg" alt="Butturflies"/>
                <Pcard title="Nature" text="Best Nature image" button="Visit" img="https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_960_720.jpg" alt="Butturflies" />
            </div>
        </div>
    )
}

export default Main_Props
