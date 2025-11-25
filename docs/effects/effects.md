# Effects
Players can be affected by two status effects: Poison and Remedy. By default, affected players can see these effects in the top left corner while browsing their inventory. This can be modified in the Catalyst Effect settings. Both Poison and Remedy additionally alter the appearance of the player’s health bar, generate particles, and apply a vignette effect.

## Poison
<div style="overflow: hidden;"> 
  <figure style="float: left; margin: 0 20px 0 0; text-align: center;">
    <img src="../../assets/images/poisoned.png" alt="Mob affected my poison" style="display: block; max-width: 300px;">
    <figcaption style="font-style: italic; color: #555; font-size: 0.9em; margin: 5px;">
      Poison particles spawning of an affected <a href="../../entities/mob">phow</a>.
    </figcaption>
  </figure>
    <p style="margin-top: -5px;">
    Player can get poisoned by getting attacked by Cockatrice, Aechorplant, hit by a poison dart or by drinking Poison Skyroot Bucket. Many mobs are however themselve immune to the poison.
    The list includes the previously mentioned mobs, as well as the various bosses residing in the dungeon and their minions.
    </p>
    <p>
    The effect stack up to 10 times with each stack increasing the poison duration by 6 seconds. When a player aquires a new stack or looses an existing stack the player takes <span class="heart_half"></span> damage.
    Intoxication causes the player to wobble, resulting in less precise movement control. 
    </p>
</div>

<div style="text-align: center;" >
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
    Remedy is primarily used to protect against and cure poison. Sources of remedy include drinking a Remedy Skyroot Bucket and being hit by a Remedy Dart. Remedy lasts for 12 seconds. Unlike poison, remedy does not stack thus using it again only refreshes the duration rather than adding to it. Upon acquisition, it cleanses the player of poison, and while active, the player cannot be poisoned. Attempts to poison the player instead spawn particles. The effect pnly lasts 2 seconds when applied via dart.
    </p>
</div>


<div style="text-align: left; font-size: 0.8em; color: #555; margin-top: 20px;">
Credits: Redart15
</div>