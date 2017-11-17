import Autocomplete from 'react-toolbox/lib/autocomplete/Autocomplete';
import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

const source = {
  "Hector Obazuaye,1,1,Fish" : "Hector Obazuaye",
  "Elayne Obazuaye,1,2,Fish" : "Elayne Obazuaye",
  "Tyshawn Obazuaye,1,3,Chicken" : "Tyshawn Obazuaye",
  "Nicholas Obazuaye,1,4,Fish" : "Nicholas Obazuaye",
  "Darnell Dotson,1,5,Chicken" : "Darnell Dotson",
  "Joann Wilson,1,6,Fish" : "Joann Wilson",
  "Carlanna Hayes,1,7,Fish" : "Carlanna Hayes",
  "Jorryan Hayes,1,8,Chicken" : "Jorryan Hayes",
  "Hallejah Murray,1,9,Steak" : "Hallejah Murray",
  "Tyler Rucker,1,10,Steak" : "Tyler Rucker",
  "Camille Hale,1,11,Chicken" : "Camille Hale",
  "Tomiko Hale,1,12,Steak" : "Tomiko Hale",
  "Shaun Hale,1,13,Vegan" : "Shaun Hale",
  "Dawud Wilson,1,14,Steak" : "Dawud Wilson",
  "Alaina Cook,1,15,Chicken" : "Alaina Cook",
  "Nyia Wilson,1,16,Steak" : "Nyia Wilson",
  "Jeanette Rhoden,1,17,Fish" : "Jeanette Rhoden",
  "Kaia Rucker,1,18,Fish" : "Kaia Rucker",
  "Diana Dotson,1,19,Steak" : "Diana Dotson",
  "Donald Dotson,1,20,Steak" : "Donald Dotson",
  "Keith Rucker,1,21,Steak" : "Keith Rucker",
  "Donna Rucker,1,22,Steak" : "Donna Rucker",
  "LaSaundra Johnson,2,1,Chicken" : "LaSaundra Johnson",
  "Vivian Flentroy,2,2,Chicken" : "Vivian Flentroy",
  "Rickey Flentroy,2,3,Chicken" : "Rickey Flentroy",
  "Develle Barksdale,2,4,Chicken" : "Develle Barksdale",
  "Vernette Barksdale,2,5,Chicken" : "Vernette Barksdale",
  "Sheri Nation,2,6,Chicken" : "Sheri Nation",
  "Erik Nation,2,7,Chicken" : "Erik Nation",
  "Terrance Hatter,2,8,Steak" : "Terrance Hatter",
  "Gishlomma Hatter,2,9,Chicken" : "Gishlomma Hatter",
  "Wendy Nation,2,10,Fish" : "Wendy Nation",
  "Steven Nation,2,11,Chicken" : "Steven Nation",
  "Leonard L Mills,2,12,Chicken" : "Leonard L Mills",
  "Pamela Mills,2,13,Chicken" : "Pamela Mills",
  "Robert Williams,2,14,Steak" : "Robert Williams",
  "Bessie Barksdale,2,15,Steak" : "Bessie Barksdale",
  "Charles Barksdale lll,2,16,Steak" : "Charles Barksdale lll",
  "Arthur Lambright,2,17,Chicken" : "Arthur Lambright",
  "Pamela flentroy,2,18,Chicken" : "Pamela flentroy",
  "Bobby Williams,2,19,Chicken" : "Bobby Williams",
  "Naji Jub,2,20,Chicken" : "Naji Jub",
  "Lori Tyler,2,21,Steak" : "Lori Tyler",
  "Michael Flentroy,2,22,Chicken" : "Michael Flentroy",
  "Trezur Nation,3,1,Chicken" : "Trezur Nation",
  "Ja'leaha Wilson,3,2,Chicken" : "Ja'leaha Wilson",
  "Renee Walters,3,3,Steak" : "Renee Walters",
  "Lexy Nation,3,4,Chicken" : "Lexy Nation",
  "Gayle Scott,3,5,Steak" : "Gayle Scott",
  "Leon Donnell,3,6,Chicken" : "Leon Donnell",
  "Ricky Flentroy II,3,7,Chicken" : "Ricky Flentroy II",
  "Anthony Moore,3,8,Fish" : "Anthony Moore",
  "Amyah Edwards,3,9,Fish" : "Amyah Edwards",
  "Shaklia Flentroy,3,10,Fish" : "Shaklia Flentroy",
  "Shalia King,3,11,Steak" : "Shalia King",
  "Hajhai Lacy,3,12,Steak" : "Hajhai Lacy",
  "Eboni McDonald,4,1,Fish" : "Eboni McDonald",
  "Juni Criner,4,2,Chicken" : "Juni Criner",
  "Anthony McDonald,4,3,Steak" : "Anthony McDonald",
  "Paula McDonald,4,4,Steak" : "Paula McDonald",
  "Johnnie Flentroy,4,5,Fish" : "Johnnie Flentroy",
  "Antoine McDonald,4,6,Steak" : "Antoine McDonald",
  "Jacqueline Taylor,4,7,Fish" : "Jacqueline Taylor",
  "James Taylor,4,8,Steak" : "James Taylor",
  "George Jackson Sr.,4,9,Fish" : "George Jackson Sr.",
  "Regina Jackson,4,10,Steak" : "Regina Jackson",
  "Ron Reeser,4,11,Steak" : "Ron Reeser",
  "LaKeshia Lang,4,12,Steak" : "LaKeshia Lang",
  "Jeffrey B Robinson,5,1,Fish" : "Jeffrey B Robinson, Sr.",
  "Cheryl G Robinson,5,2,Fish" : "Cheryl G Robinson",
  "Adreana D Robinson,5,3,Vegan" : "Adreana D Robinson",
  "Jeffrey B Robinson,5,4,Fish" : "Jeffrey B Robinson, Jr.",
  "Jocelyn M Robinson,5,5,Fish" : "Jocelyn M Robinson",
  "Shalonda Anderson,5,6,Fish" : "Shalonda Anderson",
  "Bruce Anderson,5,7,Steak" : "Bruce Anderson",
  "Stephani Fortune,5,8,Chicken" : "Stephani Fortune",
  "Eugene Fortune,5,9,Steak" : "Eugene Fortune",
  "Daria Fortune,5,10,Chicken" : "Daria Fortune",
  "Eugene Fortune III 1yr old,5,Mom,Chicken" : "Eugene Fortune III 1yr old",
  "Dominick Fortune,5,11,Chicken" : "Dominick Fortune",
  "Monica Price,5,12,Chicken" : "Monica Price",
  "Alan Price,5,13,Chicken" : "Alan Price",
  "Alma Burrell,5,14,Fish" : "Alma Burrell",
  "Richelle Burrell,5,15,Steak" : "Richelle Burrell",
  "Edgar Martinez,5,16,Steak" : "Edgar Martinez",
  "Macio Oliveira,5,17,Fish" : "Macio Oliveira",
  "Destiny Gray,5,18,Chicken" : "Destiny Gray",
  "Evette Gray,5,19,Chicken" : "Evette Gray",
  "Darlene Brown,5,20,Fish" : "Darlene Brown",
  "Nichele Frazier,5,21,Fish" : "Nichele Frazier",
  "KryShawn Frazier,5,22,Steak" : "KryShawn Frazier",
  "Mark Everett,6,1,Chicken" : "Mark Everett",
  "Gloria Everett,6,2,Chicken" : "Gloria Everett",
  "Paul Everett,6,3,Chicken" : "Paul Everett",
  "Alexis Everett,6,4,Chicken" : "Alexis Everett",
  "Darci Oliver,6,5,Fish" : "Darci Oliver",
  "Kimbell Hollins,6,6,Fish" : "Kimbell Hollins",
  "Dr. Ike Chidiman,6,7,Fish" : "Dr. Ike Chidiman",
  "Jonathan Haulcy,6,8,Steak" : "Jonathan Haulcy",
  "Joyanna Haulcy,6,9,Fish" : "Joyanna Haulcy",
  "Brei Houston,6,10,Fish" : "Brei Houston",
  "Doris Haulcy,6,11,Chicken" : "Doris Haulcy",
  "Cleveland Haulcy,6,12,Fish" : "Cleveland Haulcy",
  "Osina Karibo,7,1,Steak" : "Osina Karibo",
  "Noro Karibo,7,2,Fish" : "Noro Karibo",
  "Efosa Osunde,7,3,Chicken" : "Efosa Osunde",
  "Clement Osunde,7,4,Fish" : "Clement Osunde",
  "Douglas Osunde,7,5,Fish" : "Douglas Osunde",
  "Tony Ogbeide,7,6,Fish" : "Tony Ogbeide",
  "Deneen Ogbeide,7,7,Fish" : "Deneen Ogbeide",
  "Osazuwa Ogeude,7,8,Chicken" : "Osazuwa Ogeude",
  "Fred Iyasere,7,9,Fish" : "Fred Iyasere",
  "Florence Iyasere,7,10,Chicken" : "Florence Iyasere",
  "Juliet Anaro,7,11,Fish" : "Juliet Anaro",
  "Francis Anaro,7,12,Chicken" : "Francis Anaro",
  "Mr. Ose Oribo,8,1,Chicken" : "Mr. Ose Oribo",
  "Mrs. Sandra Oribo,8,2,Chicken" : "Mrs. Sandra Oribo",
  "Tanysha Jackson,8,3,Chicken" : "Tanysha Jackson",
  "Anthony Harris,8,4,Chicken" : "Anthony Harris",
  "Tanya Harris,8,5,Chicken" : "Tanya Harris",
  "Margie Forehand,8,6,Fish" : "Margie Forehand",
  "Sheldon Forehand,8,7,Chicken" : "Sheldon Forehand",
  "Cheryl Gipson,8,8,Chicken" : "Cheryl Gipson",
  "Beverly Brown,8,9,Fish" : "Beverly Brown",
  "Mr. Ernest Harris,8,10,Fish" : "Mr. Ernest Harris",
  "Mrs. Kimberly Harris,8,11,Steak" : "Mrs. Kimberly Harris",
  "Rochon Jones,8,12,Fish" : "Rochon Jones",
  "Vernon Jones,8,13,Chicken" : "Vernon Jones",
  "David Jones,8,14,Chicken" : "David Jones",
  "Tanessa Jones,8,15,Steak" : "Tanessa Jones",
  "Zakiyyah Hill,8,16,Chicken" : "Zakiyyah Hill",
  "Larry Hill,8,17,Chicken" : "Larry Hill",
  "Charleen Banks,8,18,Fish" : "Charleen Banks",
  "Isabelle Omoregie,8,19,Fish" : "Isabelle Omoregie",
  "Gabrielle Omoregie,8,20,Chicken" : "Gabrielle Omoregie",
  "Mrs. Omoregie,8,21,Fish" : "Mrs. Omoregie",
  "Mr. Henry Omoregie,8,22,Chicken" : "Mr. Henry Omoregie",
  "Brezjana Wilson,9,1,Steak" : "Brezjana Wilson",
  "Junior Ballard,9,3,Steak" : "Junior Ballard",
  "Isabel Ornelas,9,4,Fish" : "Isabel Ornelas",
  "Gabriela Corniel,9,5,Fish" : "Gabriela Corniel",
  "Lyric Moran,9,6,Fish" : "Lyric Moran",
  "Leila Corniel,9,7,Chicken" : "Leila Corniel",
  "Rashawn Ballard,9,9,Steak" : "Rashawn Ballard",
  "Maya Flores,9,10,Fish" : "Maya Flores",
  "Michael Ballard,9,11,Steak" : "Michael Ballard",
  "Richon Nash,9,12,Steak" : "Richon Nash",
  "Larry Butler,10,1,Steak" : "Larry Butler",
  "Tony Foster,10,2,Chicken" : "Tony Foster",
  "Ann Foster,10,3,Vegan" : "Ann Foster",
  "Robert Banks,10,4,Chicken" : "Robert Banks",
  "Sicila  Robertson,10,5,Fish" : "Sicila  Robertson",
  "Jeanice Finley,10,6,Fish" : "Jeanice Finley",
  "Rodney Finley,10,7,Steak" : "Rodney Finley",
  "Karissa Christopher,10,8,Fish" : "Karissa Christopher",
  "Chanda Domantay,10,9,Chicken" : "Chanda Domantay",
  "Chris Hopkins,10,10,Steak" : "Chris Hopkins",
  "Myisha Polk,11,1,Fish" : "Myisha Polk",
  "Tracy Terrell,11,2,Steak" : "Tracy Terrell",
  "Brittny Nation,11,3,Steak" : "Brittny Nation",
  "Steven Deuce Nation,11,4,Steak" : "Steven Deuce Nation",
  "Ashly Nation,11,5,Chicken" : "Ashly Nation",
  "Annie Wong,11,6,Steak" : "Annie Wong",
  "Crystal Liu,11,7,Chicken" : "Crystal Liu",
  "Pariss Sykes,11,8,Chicken" : "Pariss Sykes",
  "Ligia Tijerino,11,9,Chicken" : "Ligia Tijerino",
  "Brittany Moore,11,10,Steak" : "Brittany Moore",
  "Glynnyale Shiel,12,1,Vegan" : "Glynnyale Shiel",
  "Saraiah Davis,12,3,Fish" : "Saraiah Davis",
  "Erika  Connor,12,4,Steak" : "Erika  Connor",
  "Samantha Shoushtari,12,5,Steak" : "Samantha Shoushtari",
  "Kye Dohrmann,12,6,Fish" : "Kye Dohrmann",
  "Belinda Wava,12,7,Steak" : "Belinda Wava",
  "Joseph Goudlock,12,8,Steak" : "Joseph Goudlock",
  "Carolyn Gibson,12,9,Fish" : "Carolyn Gibson",
  "Demitrese Gray,12,10,Fish" : "Demitrese Gray",
  "Rachael Obazuaye,H,1,Fish" : "Rachael Obazuaye",
  "Christopher Williams,H,2,Steak" : "Christopher Williams",
  "Thomas Christopher,H,3,Steak" : "Thomas Christopher",
  "Torre Williams,H,4,Chicken" : "Torre Williams",
  "Nate Liggins,H,5,Vegan" : "Nate Liggins",
  "Marcus Flentroy,H,6,Steak" : "Marcus Flentroy",
  "Jayson Obazuaye,H,7,Fish" : "Jayson Obazuaye",
  "Kwame Askia,H,8,Vegan" : "Kwame Askia",
  "Crystal Obazuaye,H,9,Steak" : "Crystal Obazuaye",
  "Osayimwen Osunde,H,10,Steak" : "Osayimwen Osunde",
  "Nadia Whitehead,H,11,Chicken" : "Nadia Whitehead",
  "Ashleigh Rucker,H,12,Steak" : "Ashleigh Rucker",
  "Ese Ntekume,H,13,Fish" : "Ese Ntekume",
  "Rae'lyn Williams,H,14,Steak" : "Rae'lyn Williams"
};

export class AutoCompleteTest extends React.Component {
  state = {
    seats: []
  }

  handleChange = (value) => {
    var realValue;
    console.log(value)
    realValue = value[0].split(",");
    const latestValue = value.slice().shift();
    this.setState({seats: realValue[2], tables: realValue[1], check: source[latestValue], entre: realValue[3]});
  };

  render () {
    return (
      <center>
        <div>
        <Autocomplete
          direction="down"
          selectedPosition="below"
          label="Select Your Name"
          onChange={this.handleChange}
          value={0}
          source={source} >
        </Autocomplete>
          <Card style={{width: '350px'}}>
            <CardTitle
              avatar="https://apis.xogrp.com/media-api/images/b4adc5bb-71b3-f0de-edeb-25f42dc2cf91~sc_320.320"
              title={this.state.check}
            />
            <CardMedia
              aspectRatio="wide"
              image="https://images.contentful.com/wnfy2vxzshna/1SgotGu06waAqySOkqcGUI/25795e65fd6e4ca3f7f00952d2afdf4c/x-back_chair_-_Lovers_of_Love_Photography.jpg?w=1140&h=600&fm=jpg&q=80&fl=progressive"
            />
            <CardTitle
              title=  {"TABLE # " + this.state.seats + "  & SEAT # " + this.state.tables}
            />
            <CardTitle
              title=  {"Entree:    " + this.state.entre}
            />
            <img src={require('./floormap5.png')} className="img-responsive" />
          </Card>


        </div>
      </center>


    );
    }

}

export default AutoCompleteTest;
