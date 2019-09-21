import React from 'react';

import _ from 'lodash';

import TextBox from '../themeComponents/TextBox';
import Heading from '../themeComponents/Heading';

import './HomePage.css';

const HomePage = props => {
  React.useEffect(() => {
    if (_.get(props, 'redirectState.scrollTo', false)) {
      document
      .getElementById(`${props.redirectState.scrollTo}`)
      .scrollIntoView();
    }
  }, [ props.redirectState ]);

  return (
    <div className="home-page">
      <div className="home-page__image-container">
        <img
          alt="A warm kitchen with beautiful wooden cabinets."
          className="home-page__image"
          src="./assets/kitchen_pic.jpeg"
        />
      </div>

      <Heading
        text="Our Story"
      />

      <TextBox 
        text="We are a really cool couple and you should buy our stuff. Where are my glasses?"
      />

      <Heading
        text="About Dan's Work"
      />

      <TextBox 
        text="Then cats take over the world pet me pet me don't pet me for claws in your leg and demand to be let outside at once, and expect owner to wait for me as i think about it for headbutt owner's knee spread kitty litter all over house yet hiiiiiiiiii feed me now. Eat half my food and ask for more. Humans,humans, humans oh how much they love us felines we are the center of attention they feed, they clean . Slap the dog because cats rule. Fall asleep on the washing machine scream at teh bath fall asleep on the washing machine. Drink water out of the faucet please stop looking at your phone and pet me taco cat backwards spells taco cat. Claws in your leg bring your owner a dead bird yet lounge in doorway so look at dog hiiiiiisssss. I like frogs and 0 gravity. Attack the child snuggles up to shoulders or knees and purrs you to sleep cat snacks, i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk find a way to fit in tiny box stare at owner accusingly then wink."
      />

      <Heading
        text="Dan's Materials"
      />

      <TextBox 
        text="Run in circles. Floof tum, tickle bum, jellybean footies curly toes have secret plans or headbutt owner's knee see brother cat receive pets, attack out of jealousy mice yet pretend you want to go out but then don't make meme, make cute face. Leave dead animals as gifts rub butt on table or where is my slave? I'm getting hungry for throw down all the stuff in the kitchen. Meow meow mama my slave human didn't give me any food so i pooped on the floor fight an alligator and win, run in circles, or lick arm hair yet take a big fluffing crap 💩, for all of a sudden cat goes crazy. My left donut is missing, as is my right stare at ceiling light human give me attention meow for i cry and cry and cry unless you pet me, and then maybe i cry just for fun. Look at dog hiiiiiisssss. Slap the dog because cats rule have my breakfast spaghetti yarn so plan steps for world domination so fooled again thinking the dog likes me and trip on catnip yet when owners are asleep, cry for no apparent reason, yet chew foot."
      />

      <Heading
        text="Custom Options"
      />

      <TextBox 
        text="Eat fish on floor mark territory. Scratch lick yarn hanging out of own butt lie on your belly and purr when you are asleep. Adventure always destroy couch, yet my left donut is missing, as is my right for i'm going to lap some water out of my master's cup meow lies down . Be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats cat milk copy park pee walk owner escape bored tired cage droppings sick vet vomit sleeps on my head but floof tum, tickle bum, jellybean footies curly toes. Has closed eyes but still sees you chase the pig around the house mrow. Cat is love, cat is life sit on human they not getting up ever for scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food. Hopped up on catnip hack up furballs, caticus cuteicus man running from cops stops to pet cats, goes to jail lies down love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him (the yarn is from a $125 sweater) slap owner's face at 5am until human fills food dish. Throwup on your pillow litter kitter kitty litty little kitten big roar roar feed me and poop on grasses. Hiss at vacuum cleaner cats are the world."
      />

      <div className="theme__end-of-page-spacer" />
    </div>
  )
};

export default HomePage;