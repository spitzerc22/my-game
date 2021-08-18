window.prompt('Do you head left or right?')

let answer = window.prompt('Do you head left or right?')

if(answer === 'left'){ //why do I have to enter the anwser twice??//

        let secondAnswer = window.prompt ("You come across a stray car. It scampers off down a small hole, just large enough for you to crawl through. Do you follow it, or continue on your path?")
}
                if( secondAnswer === "follow it"){
                         
                        let followAnwser = window.alert ("You follow the cat to a colory of cats, nestled ina fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical sage haven.")
                } //good up until here
                if( followAnwser === "stay") {

                        let stayAnwser = window.alert ("You live happily amongst the cats for the rest of your days.")
       }

                else if ( followAnwser === "spread the word") {

                        let spreadAnwser = window.alert (" After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.")
       }
} else if ( secondAnswer === "continue on your path") {

        let continueAnswer = window.prompt (" You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?")
}
              if (continueAnswer = "ladder") {

                      let ladderAnwser = window.alert ("After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.")
              }
              else if ( continueAnwser = "staircase") {

                      let staircaseAnswer = window.alert ("After ascening the staircase, you discover a shiny blue stone, which you take home and cherish forever.")
              }
}

} else if (answer === "right") {

let secondAnswer = window.prompt ("You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which path do you take?")

}
if (secondAnswer === "past the dragon") {

      let pastAnswer = window.prompt (" The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:") {

              if( pastAnswer === "stay") {

                      let stayAnswer = window.alert ("You and the dragon have an uplifting conversation about local politics and become lifelong friends.")

              }

              else if( pastAnswer === "run"){

                      let runAnswer = window.alert ("Quicklym you run back to the cave's entrance. Sheepish, you return home.")
              }

              }
      }
}
else if( secondAnswer === "away from the dragon") {

      let awayAnswer = window.prompt("After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?") {

              if (awayAnswer === "draw it") {

                      let drawAnswer = window.alert ("You draw the flower, capturing only a fraction of its beauty with your quill. You bring the deawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch")
              }

              else if (awayAnswer === "pick it") {

                      let awayAnswer = window.alert ("You pick the flower and bring it home, and all marvel at its billiance. However, over time it fades and eventually crumbles to dust.")
              }
      }
}
}
}