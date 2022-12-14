import React from 'react'

import { EscapeQuest } from './EscapeQuest'

/**
 * To create your own emotive NPCs with dialog and quests, follow along
 * with the code below.
 *
 * `Erika.js` contains code unique to the NPC, including the dialog flow,
 * quest item placement and behaviours.
 *
 * `Dialog.js` is the entire logic for dialog boxes. You dont have to edit
 * this but its there if you need to change the background image or add additional
 * features.
 */

export default function Environment() {
  return (
    <app>
      <EscapeQuest />

      {/* <Erika position={[0, 0, 0]} armorPosition={[-82, 25, 83]} swordPosition={[140,11,-588]}/>*/}

      <model src="bookshelf.glb" scale={7} />
    </app>
  )
}
