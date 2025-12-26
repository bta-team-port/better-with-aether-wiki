# Effects
Players can be affected by two status effects: Poison, Remedy, Invisibility and Swetty.
By default, affected players can see these effects in the top left corner while browsing their inventory.
This can be modified in the Catalyst Effect settings.
Both Poison and Remedy additionally alter the appearance of the player’s health bar, generate particles, and apply a vignette effect.

## Poison
<div style="overflow: hidden;"> 
  <figure style="float: left; margin: 0 20px 0 0; text-align: center;">
    <img src="../../assets/images/poisoned.png" alt="Mob affected my poison" style="display: block; max-width: 300px;">
    <figcaption style="font-style: italic; color: #555; font-size: 0.9em; margin: 5px;">
      Poison particles spawning of an affected <a href="../../entities/mob">phow</a>.
    </figcaption>
  </figure>
    <p style="margin-top: -5px;">
    Player can get poisoned by getting attacked by Cockatrice, Aechorplant, hit by a poison dart or by drinking Poison Skyroot Bucket. Many mobs are however themselves immune to the poison.
    The list includes the previously mentioned mobs, as well as the various bosses residing in the dungeon and their minions.
    </p>
    <p>
    The effect stack up to 10 times with each stack increasing the poison duration by 6 seconds. When a player acquires a new stack or looses an existing stack the player takes <span class="heart_half"></span> damage.
    Intoxication causes the player to wobble, resulting in less precise movement control. 
    </p>
</div>

<div style="text-align: center;" >
    <details style="border: none; padding: 0;">
    <summary style="
      list-style: none; 
      cursor: pointer; 
      font-size: 18px; 
      font-weight: bold; 
      display: flex; 
      align-items: center;
      gap: 8px;
    ">
      <span class="arrow" style="
        display: inline-block; 
        transition: transform 0.3s;
      ">▶</span>
      Poison Stack Values
    </summary>
<table border="1" cellpadding="6" cellspacing="0" style="border-collapse: collapse; text-align: center; font-size: 16px;">
    <thead>
        <tr>
            <th>Poison Source</th>
            <th style="text-align: center;">Cockatrice</th>
            <th style="text-align: center;">Aechorplant</th>
            <th style="text-align: center;">Poison Dart</th>
            <th style="text-align: center;">Poison Skyroot Bucket</th>
        </tr>
    </thead>
    <tr>
        <td>Stack Applied</td>
        <td style="text-align: center;">1–2</td>
        <td style="text-align: center;">1–2</td>
        <td style="text-align: center;">2</td>
        <td style="text-align: center;">4</td>
    </tr>
    </details>
 </table>
 </div>

## Remedy
<div style="overflow: hidden;"> 
  <figure style="float: right; margin: 0 0 0 20px; text-align: center;">
    <img src="../../assets/images/remedy_hardcore.png" alt="Remedy healthbar in hardcore." style="display: block; max-width: 400px;">
    <figcaption style="font-style: italic; color: #555; font-size: 0.9em; margin-top: 5px;">
      Remedy healthbar in hardcore.
    </figcaption>
  </figure>
    <p style="margin-top: -5px;">
    Remedy is primarily used to protect against and cure poison.
    Sources of remedy include drinking a Remedy Skyroot Bucket and being hit by a Remedy Dart.
    Remedy lasts for 12 seconds. Unlike poison, remedy does not stack thus using it again only refreshes the duration rather than adding to it.
    Upon acquisition, it cleanses the player of poison, and while active, the player cannot be poisoned.
    Attempts to poison the player instead spawn particles. The effect only lasts 2 seconds when applied via dart.
    </p>
</div>


## Invisibility
Invisibility turn the player nearly invisible to others.
While invisible, player will need to be very close for mobs to notice them.
Mobs will stop chasing invisible player once the player is more than 8 blocks away.
Only the player remains invisible, the players armor and holding item becomes translucent instead.
Importantly most [Dungeon Denizens](../entities/mobs.md#dungeons-denizens) have true sight can will be able to see and attack invisible player.
This effect can currently only be applied by the  <a href="../../items/accessories/cape">Invisibility Cloak</a>.

<div style="display: flex; width: 100%;">
    <figure style="flex: 1; margin: 0; text-align: center;">
    <img src="../../assets/mpic.png" alt="An invisible Player wearing armor." style="display: block; max-width: 300px;">
    <figcaption style="font-style: italic; color: #555; font-size: 0.9em; margin: 5px;">
      An invisible Player wearing armor. <a href="../../entities/mob">phow</a>.
    </figcaption>
  </figure>
  <figure style="flex: 1; margin: 0; text-align: center;">
    <img src="../../assets/mpic.png" alt="Swets and Slimes ignoring the player wearing the Swet Cape and chasing the other player instead." style="display: block; max-width: 400px;">
    <figcaption style="font-style: italic; color: #555; font-size: 0.9em; margin-top: 5px;">
      Swets and Slimes ignoring the player wearing the Swet Cape and chasing the other player instead.
    </figcaption>
  </figure>
</div>


## Swetty
Just like Invisibility, Swetty can only be applied by the Swet cape.
While under the effect <a href="../../items/accessories/cape">Swets</a> and <a href="https://bta.miraheze.org/wiki/Slime">Slimes</a> will not attack the player.
Slimes and Swets will instead target the nearerst non-swetty player.
Players tackled by a Swet can immediately escape its grip by equipping the Cape.


<div style="text-align: left; font-size: 0.8em; color: #555; margin-top: 20px;">
  Credits: Redart15
  <br>
  Last Updated: <span id="last-updated"></span>
</div>