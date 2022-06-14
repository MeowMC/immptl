import{_ as e,e as t}from"./app.4a6db953.js";const a={},o=t('<h1 id="portal-customization" tabindex="-1"><a class="header-anchor" href="#portal-customization" aria-hidden="true">#</a> Portal Customization</h1><h2 id="portal-helper-block" tabindex="-1"><a class="header-anchor" href="#portal-helper-block" aria-hidden="true">#</a> Portal Helper Block</h2><p>This mod provides a new block called &quot;Portal Helper&quot;. You can build two frames using that block and use flint and steel to light one. Then a new two-way two-faced portal will be generated. The portal&#39;s rotation and scale transformation will adapt to the shape difference.</p><figure><img src="https://i.loli.net/2021/11/20/r3kjeCpyuFEbIBX.png" alt=""></figure><figure><img src="https://i.loli.net/2021/11/20/SGnbtJe35TPo1rC.png" alt=""></figure><p>If no linkable frame is found, it will generate a new frame nearby.</p><p>Unlike nether portals, the generated portal won&#39;t break when the frame breaks. To remove the portal, you need to use the command <code>/portal delete_portal</code> or <code>/portal eradicate_portal_cluster</code> (See below).</p><p>The portal helper cannot link to a frame that&#39;s far away or in another dimension. However, you can use commands to edit the portal and set the portal destination to any position in any dimension.</p><h3 id="how-to-use-similar-functionality-in-survival-mode" tabindex="-1"><a class="header-anchor" href="#how-to-use-similar-functionality-in-survival-mode" aria-hidden="true">#</a> How to Use Similar Functionality in Survival Mode</h3><p>Portal helper generates unbreakable portals and is intended to be used in creative mode. To use similar functionality in survivial mode, you can configure a similar <a href="./Datapack-Based-Custom-Portal-Generation#portal_helper_likejson-a-diamond-portal-that-links-to-the-nearby-same-shaped-portal-in-the-same-dimension-similar-to-portal-helper-but-breakable">custom datapack portal generation</a>. It generates breakable portals, and the frame block can be specified as any block.</p><h2 id="manage-portals-using-commands" tabindex="-1"><a class="header-anchor" href="#manage-portals-using-commands" aria-hidden="true">#</a> Manage Portals Using Commands</h2><p><a href="./Commands-Reference">Description of All Commands</a></p><h3 id="_1-nether-portal-4-portal-entities" tabindex="-1"><a class="header-anchor" href="#_1-nether-portal-4-portal-entities" aria-hidden="true">#</a> 1 Nether Portal = 4 Portal Entities</h3><p>How does this mod distinguish between one-way portal, bi-way portal and bi-way bi-faced portal? There is no &quot;bi-way&quot; attribute. A bi-way portal is a combination of two one-way portals.</p><p>Every portal entity is a one-faced and one-way portal. A normal nether portal is bi-faced and bi-way, it consists of 2 portal entities in the overworld and 2 portal entities in the nether, 4 portal entities in total.</p><p>Command <code>/portal delete_portal</code> will only remove one portal entity.</p><p>Command <code>/portal remove_connected_portals</code> makes the portal one-way and one-faced. If it&#39;s used for a bi-way bi-faced portal, the portal entity that you are targeting will remain and the other 3 portal entities will be removed.</p><p>Command <code>/portal complete_bi_way_portal</code> will create the &quot;reverse&quot; version of the portal entity thus make the portal bi-way. Command <code>/portal complete_bi_way_bi_faced_portal</code> creates 3 portals to make the portal bi-way bi-faced.</p><p>Command <code>/portal eradicate_portal_cluster</code> removes the whole portal. If used to a bi-way bi-faced portal, all 4 portal entities will be removed.</p><p>If you want to edit a bi-way bi-faced portal, 4 portal entities need to be edited. It&#39;s recommended to firstly enable <code>bindCluster</code> using command <code>/portal set_portal_nbt {bindCluster:true}</code>. (Note: this feature does not exist before 1.18) Then when you edit one portal entity, the linked portal entities will also change accordingly.</p><h3 id="portal-targeted-commands" tabindex="-1"><a class="header-anchor" href="#portal-targeted-commands" aria-hidden="true">#</a> Portal-Targeted Commands</h3><p>There are some portal-targeted commands for managing portals. You need to point to a portal entity when using these commands.</p><h4 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h4><ul><li><p>Change the portal entity&#39;s destination to the end: <code>/portal set_portal_destination minecraft:the_end 0 70 0</code></p></li><li><p>Delete a portal entity: <code>/portal delete_portal</code></p></li><li><p>Change the portal&#39;s rotating transformation, rotating 45 degrees along the Y axis <code>/portal set_portal_rotation 0 1 0 45</code> (<code>0 1 0</code> is the axis vector) . It&#39;s equivalent to <code>/portal set_portal_rotation_along y 45</code></p></li><li><p>Rotate the portal entity itself around X-axis for 30 degrees (does not change the rotation transformation): <code>/portal rotate_portal_body 1 0 0 30</code> . Equivalent to <code>/portal rotate_portal_body_along x 30</code></p></li><li><p>Change the portal entity&#39;s scale transformation: <code>/portal set_portal_scale 5</code></p></li><li><p>Move the portal entity forward 0.5 blocks: <code>/portal move_portal 0.5</code></p></li><li><p>Make the portal entity not able to transfer entities, turning it into a &quot;video surveillance&quot;: <code>/portal set_portal_nbt {teleportable:false}</code></p></li><li><p>Make the portal round-shaped: <code>/portal make_portal_round</code></p></li><li><p>Make the portal to damage the entities that cross this portal: <code>/portal set_portal_nbt {commandsOnTeleported:[&quot;/effect give @s minecraft:instant_damage 1&quot;]}</code></p></li></ul><p><a href="./Commands-Reference#portal-targeted-commands">See All Portal-Targeted Commands</a></p><p><a href="./Portal-Attributes">Portal Attributes</a></p><p>Note: It&#39;s not recommended to use <code>/data</code> command to change the portal&#39;s NBT data because <code>/data</code> command will not synchronize the portal data to the client and start portal animation. It&#39;s recommended to use <code>/portal set_portal_nbt</code> command.</p><h4 id="edit-portals-using-command-blocks-and-functions" tabindex="-1"><a class="header-anchor" href="#edit-portals-using-command-blocks-and-functions" aria-hidden="true">#</a> Edit Portals Using Command Blocks and Functions</h4><p>All portal targeted commands can be used by non-player command executors. If the command sender is a portal entity, the command will target that portal entity. For example <code>/execute as @e[type=immersive_portals:portal] run portal set_portal_destination minecraft:the_end 0 80 0</code></p><h3 id="command-stick" tabindex="-1"><a class="header-anchor" href="#command-stick" aria-hidden="true">#</a> Command Stick</h3><p>You can see the command sticks in the creative mode inventory&#39;s miscellaneous tab. Using a command stick to right-click can invoke a specific command.</p><h2 id="directly-create-portals" tabindex="-1"><a class="header-anchor" href="#directly-create-portals" aria-hidden="true">#</a> Directly Create Portals</h2><p>Directly create a new square portal entity:</p><ul><li><code>/portal make_portal 1 1 minecraft:the_end 0 80 0</code> Create a portal with width 1 height 1 pointing to the end</li><li><code>/portal make_portal 1 1 minecraft:overworld shift 5</code> Create a portal whiches the destination is 5 blocks ahead of the position of the portal</li></ul><h3 id="create-a-small-wrapping-zone" tabindex="-1"><a class="header-anchor" href="#create-a-small-wrapping-zone" aria-hidden="true">#</a> Create a Small Wrapping Zone</h3><p>You can create a small wrapping zone by <code>/portal create_small_inward_wrapping &lt;x1&gt; &lt;y1&gt; &lt;z1&gt; &lt;x2&gt; &lt;y2&gt; &lt;z2&gt;</code> <code>/portal create_small_outward_wrapping &lt;x1&gt; &lt;y1&gt; &lt;z1&gt; &lt;x2&gt; &lt;y2&gt; &lt;z2&gt;</code></p><p>These commands create normal portals instead of global portals. Global portal wrapping zone commands (such as <code>/portal global remove_wrapping_zone</code>) does not affect them.</p><h3 id="create-a-scaled-box-using-miniscaled-mod" tabindex="-1"><a class="header-anchor" href="#create-a-scaled-box-using-miniscaled-mod" aria-hidden="true">#</a> Create a Scaled Box using MiniScaled Mod</h3><p>If you want to make scale boxes, try <a href="https://www.curseforge.com/minecraft/mc-mods/miniscaled" target="_blank" rel="noopener noreferrer">MiniScaled</a> mod. It provides easy-to-use scale box functionality.</p><figure><img src="https://i.loli.net/2021/09/30/J9bBF82tRu5yIkW.png" alt=""></figure><h3 id="create-a-scaled-box-using-commands" tabindex="-1"><a class="header-anchor" href="#create-a-scaled-box-using-commands" aria-hidden="true">#</a> Create a Scaled Box using Commands</h3><p>Creating a scale box using commands is a little bit trickier. You can create a scaled wrapping by command <code>/portal create_scaled_box_view &lt;x1&gt; &lt;y1&gt; &lt;z1&gt; &lt;x2&gt; &lt;y2&gt; &lt;z2&gt; &lt;scale&gt; &lt;placeTargetEntity&gt; &lt;isBiWay&gt; [teleportChangesScale]</code></p><p>For example, if you want to create a box viewing the end island, use <code>/execute in minecraft:the_end run portal create_scaled_box_view -100 0 -100 100 128 100 20 @p true</code> (<code>-100 0 -100 100 128 100</code> is the inner box on the end dimension, <code>20</code> is the scale, the outer box will be placed on <code>@p</code> &#39;s position)</p><figure><img src="https://i.loli.net/2021/11/20/n3zO8CYdRoMc2bl.png" alt=""></figure><h2 id="create-the-portal-that-points-to-different-destinations-for-different-players" tabindex="-1"><a class="header-anchor" href="#create-the-portal-that-points-to-different-destinations-for-different-players" aria-hidden="true">#</a> Create the Portal that Points to Different Destinations for Different Players</h2><p>By using <code>/portal set_portal_specific_accessor</code> command you can make a portal entity only accessible for one player. By putting two different portal entities that are specific for two different players into the same place, you can create a portal that points to different destinations for different players.</p><p>You can manage overlapped portals using <code>/portal multidest</code> command.</p><p>(Portal targeted commands can still be used on the portal that&#39;s not accessible to you)</p><h2 id="common-questions" tabindex="-1"><a class="header-anchor" href="#common-questions" aria-hidden="true">#</a> Common Questions</h2><h3 id="how-to-connect-two-portals" tabindex="-1"><a class="header-anchor" href="#how-to-connect-two-portals" aria-hidden="true">#</a> How to connect two portals?</h3><p>It&#39;s not recommended to &quot;connect&quot; two existing portals. The recommended way is to use <code>/portal remove_connected_portals</code> first, then edit the portal, then <code>/portal complete_bi_way_portal</code>.</p><h2 id="other-utility-commands" tabindex="-1"><a class="header-anchor" href="#other-utility-commands" aria-hidden="true">#</a> Other Utility Commands</h2><p>You can use command <code>/portal tpme &lt;dimension&gt; &lt;x&gt; &lt;y&gt; &lt;z&gt;</code> to teleport yourself across dimensions without loading screen. If you accidentally go through a one-way portal and want to come back, you can use <code>/portal goback</code></p>',53);function r(n,i){return o}var d=e(a,[["render",r],["__file","Portal-Customization.html.vue"]]);export{d as default};