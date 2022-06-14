import{_ as e,e as a}from"./app.4a6db953.js";const t={},o=a('<h1 id="commands-reference" tabindex="-1"><a class="header-anchor" href="#commands-reference" aria-hidden="true">#</a> Commands Reference</h1><h2 id="portal-targeted-commands" tabindex="-1"><a class="header-anchor" href="#portal-targeted-commands" aria-hidden="true">#</a> Portal Targeted Commands</h2><p>Not only the ones with level 2 permission, but any creative mode players can also use the portal targeted commands.</p><p>The portal targeted commands all targets to one portal entity. If the command sender is a player, it targets the portal that the player is looking at. If the command sender is a portal entity, the command will target that portal entity.</p><p>These commands don&#39;t work with global portals.</p><h3 id="change-the-portal-s-destination" tabindex="-1"><a class="header-anchor" href="#change-the-portal-s-destination" aria-hidden="true">#</a> Change the Portal&#39;s Destination</h3><h4 id="portal-set-portal-destination-dimenision-x-y-z" tabindex="-1"><a class="header-anchor" href="#portal-set-portal-destination-dimenision-x-y-z" aria-hidden="true">#</a> <code>/portal set_portal_destination &lt;dimenision&gt; &lt;x&gt; &lt;y&gt; &lt;z&gt;</code></h4><p>Change a portal entity&#39;s destination to a specific dimension and a specific position.</p><h4 id="portal-set-portal-destination-to-entity" tabindex="-1"><a class="header-anchor" href="#portal-set-portal-destination-to-entity" aria-hidden="true">#</a> <code>/portal set_portal_destination_to &lt;entity&gt;</code></h4><p>Set the portal destination to an entity&#39;s position.</p><h4 id="portal-move-portal-destination-distance" tabindex="-1"><a class="header-anchor" href="#portal-move-portal-destination-distance" aria-hidden="true">#</a> <code>/portal move_portal_destination &lt;distance&gt;</code></h4><p>Move the portal&#39;s destination along the direction that you are looking at.</p><h4 id="portal-relatively-move-portal-destination-dx-dy-dz" tabindex="-1"><a class="header-anchor" href="#portal-relatively-move-portal-destination-dx-dy-dz" aria-hidden="true">#</a> <code>/portal relatively_move_portal_destination &lt;dx&gt; &lt;dy&gt; &lt;dz&gt;</code></h4><p>Move the portal&#39;s destination by a vector in the other side&#39;s coordinate.</p><h3 id="manage-the-portal" tabindex="-1"><a class="header-anchor" href="#manage-the-portal" aria-hidden="true">#</a> Manage the Portal</h3><h4 id="portal-set-portal-nbt-nbt" tabindex="-1"><a class="header-anchor" href="#portal-set-portal-nbt-nbt" aria-hidden="true">#</a> <code>/portal set_portal_nbt &lt;nbt&gt;</code></h4><p>Set the portal&#39;s NBT data. <a href="./Portal-Attributes">Portal NBT Data Format</a></p><h4 id="portal-view-portal-data" tabindex="-1"><a class="header-anchor" href="#portal-view-portal-data" aria-hidden="true">#</a> <code>/portal view_portal_data</code></h4><p>View the portal&#39;s NBT data.</p><h4 id="portal-delete-portal" tabindex="-1"><a class="header-anchor" href="#portal-delete-portal" aria-hidden="true">#</a> <code>/portal delete_portal</code></h4><p>Remove the portal.</p><h4 id="portal-move-portal-distance" tabindex="-1"><a class="header-anchor" href="#portal-move-portal-distance" aria-hidden="true">#</a> <code>/portal move_portal &lt;distance&gt;</code></h4><p>Move the portal along the direction that you are looking at.</p><h4 id="portal-set-portal-position-dimension-x-y-z" tabindex="-1"><a class="header-anchor" href="#portal-set-portal-position-dimension-x-y-z" aria-hidden="true">#</a> <code>/portal set_portal_position &lt;dimension&gt; &lt;x&gt; &lt;y&gt; &lt;z&gt;</code></h4><p>Change the portal&#39;s position.</p><h4 id="portal-relatively-move-portal-dx-dy-dz" tabindex="-1"><a class="header-anchor" href="#portal-relatively-move-portal-dx-dy-dz" aria-hidden="true">#</a> <code>/portal relatively_move_portal &lt;dx&gt; &lt;dy&gt; &lt;dz&gt;</code></h4><p>Move the portal by a vector in the portal orientation coordinate. For example, <code>/portal relatively_move_portal 1 2 3</code> will move the portal 1 block along <code>axisW</code>, 2 blocks along <code>axisH</code> and 3 blocks along the normal.</p><h3 id="portal-cluster-management" tabindex="-1"><a class="header-anchor" href="#portal-cluster-management" aria-hidden="true">#</a> Portal Cluster Management</h3><p><a href="./Portal-Customization#1-nether-portal--4-portal-entities">How this mod manage bi-way and bi-faced portals</a></p><h4 id="portal-complete-bi-way-portal" tabindex="-1"><a class="header-anchor" href="#portal-complete-bi-way-portal" aria-hidden="true">#</a> <code>/portal complete_bi_way_portal</code></h4><p>Create a new portal entity to make the portal bi-way. Duplicated portals will be removed.</p><h4 id="portal-complete-bi-faced-portal" tabindex="-1"><a class="header-anchor" href="#portal-complete-bi-faced-portal" aria-hidden="true">#</a> <code>/portal complete_bi_faced_portal</code></h4><p>Create a new portal entity to make the portal bi-faced. Duplicated portals will be removed.</p><h4 id="portal-complete-bi-way-bi-faced-portal" tabindex="-1"><a class="header-anchor" href="#portal-complete-bi-way-bi-faced-portal" aria-hidden="true">#</a> <code>/portal complete_bi_way_bi_faced_portal</code></h4><p>Create new portal entities to make the portal bi-way and bi-faced. Duplicated portals will be removed.</p><h4 id="portal-remove-connected-portals" tabindex="-1"><a class="header-anchor" href="#portal-remove-connected-portals" aria-hidden="true">#</a> <code>/portal remove_connected_portals</code></h4><p>Remove portal entities to make the portal one-way and one-faced.</p><h4 id="portal-eradicate-portal-cluster" tabindex="-1"><a class="header-anchor" href="#portal-eradicate-portal-cluster" aria-hidden="true">#</a> <code>/portal eradicate_portal_cluster</code></h4><p>Completely remove a bi-way portal (4 portal entities). Equivalent to <code>/portal remove_connected_portals</code> and then <code>/portal delete_portal</code></p><h3 id="rotation" tabindex="-1"><a class="header-anchor" href="#rotation" aria-hidden="true">#</a> Rotation</h3><h4 id="portal-set-portal-rotation-axisx-axisy-axisz-angledegrees" tabindex="-1"><a class="header-anchor" href="#portal-set-portal-rotation-axisx-axisy-axisz-angledegrees" aria-hidden="true">#</a> <code>/portal set_portal_rotation &lt;axisX&gt; &lt;axisY&gt; &lt;axisZ&gt; &lt;angleDegrees&gt;</code></h4><p>Set the portal&#39;s rotation transformation.</p><p>The rotation transformation is defined by a rotating axis vector and the angle in degrees. When the axis is pointing on you, a positive angle corresponds to rotating counter-clockwise.</p><p>Does not rotate the portal itself.</p><h4 id="portal-set-portal-rotation-along-axis-angledegrees" tabindex="-1"><a class="header-anchor" href="#portal-set-portal-rotation-along-axis-angledegrees" aria-hidden="true">#</a> <code>/portal set_portal_rotation_along &lt;axis&gt; &lt;angleDegrees&gt;</code></h4><p>Similar to the above but use <code>x</code>, <code>y</code> or <code>z</code> to represent the axis vector</p><h4 id="portal-rotate-portal-body-axisx-axisy-axisz-angledegrees" tabindex="-1"><a class="header-anchor" href="#portal-rotate-portal-body-axisx-axisy-axisz-angledegrees" aria-hidden="true">#</a> <code>/portal rotate_portal_body &lt;axisX&gt; &lt;axisY&gt; &lt;axisZ&gt; &lt;angleDegrees&gt;</code></h4><p>Rotate the portal. This command does not change the portal&#39;s rotating transformation.</p><h4 id="portal-rotate-portal-body-along-axis-angledegrees" tabindex="-1"><a class="header-anchor" href="#portal-rotate-portal-body-along-axis-angledegrees" aria-hidden="true">#</a> <code>/portal rotate_portal_body_along &lt;axis&gt; &lt;angleDegrees&gt;</code></h4><p>Similar to the above.</p><h4 id="portal-rotate-portal-rotation-axisx-axisy-axisz-angledegrees" tabindex="-1"><a class="header-anchor" href="#portal-rotate-portal-rotation-axisx-axisy-axisz-angledegrees" aria-hidden="true">#</a> <code>/portal rotate_portal_rotation &lt;axisX&gt; &lt;axisY&gt; &lt;axisZ&gt; &lt;angleDegrees&gt;</code></h4><p>Change the portal&#39;s rotation transformation by applying an additional rotation to the original rotation.</p><h4 id="portal-rotate-portal-rotation-along-axis-angledegrees" tabindex="-1"><a class="header-anchor" href="#portal-rotate-portal-rotation-along-axis-angledegrees" aria-hidden="true">#</a> <code>/portal rotate_portal_rotation_along &lt;axis&gt; &lt;angleDegrees&gt;</code></h4><p>Similar to the above.</p><h3 id="scale" tabindex="-1"><a class="header-anchor" href="#scale" aria-hidden="true">#</a> Scale</h3><h4 id="portal-set-portal-scale-scale" tabindex="-1"><a class="header-anchor" href="#portal-set-portal-scale-scale" aria-hidden="true">#</a> <code>/portal set_portal_scale &lt;scale&gt;</code></h4><p>Set the portal&#39;s scale transformation.</p><h4 id="portal-multiply-portal-scale-scale" tabindex="-1"><a class="header-anchor" href="#portal-multiply-portal-scale-scale" aria-hidden="true">#</a> <code>/portal multiply_portal_scale &lt;scale&gt;</code></h4><p>Multiply the portal&#39;s scale by a number.</p><h4 id="portal-divide-portal-scale-scale" tabindex="-1"><a class="header-anchor" href="#portal-divide-portal-scale-scale" aria-hidden="true">#</a> <code>/portal divide_portal_scale &lt;scale&gt;</code></h4><p>Divide the portal&#39;s scale by a number.</p><h3 id="player-specific-property" tabindex="-1"><a class="header-anchor" href="#player-specific-property" aria-hidden="true">#</a> Player-specific Property</h3><h4 id="portal-set-portal-specific-accessor-player" tabindex="-1"><a class="header-anchor" href="#portal-set-portal-specific-accessor-player" aria-hidden="true">#</a> <code>/portal set_portal_specific_accessor &lt;player&gt;</code></h4><p>Make the portal entity only accessible by one player.</p><h4 id="portal-set-portal-specific-accessor" tabindex="-1"><a class="header-anchor" href="#portal-set-portal-specific-accessor" aria-hidden="true">#</a> <code>/portal set_portal_specific_accessor</code></h4><p>Make the portal entity accessible to all players.</p><h4 id="portal-multidest-player-dimension-x-y-z-isbifaced-isbiway" tabindex="-1"><a class="header-anchor" href="#portal-multidest-player-dimension-x-y-z-isbifaced-isbiway" aria-hidden="true">#</a> <code>/portal multidest &lt;player&gt; &lt;dimension&gt; &lt;x&gt; &lt;y&gt; &lt;z&gt; &lt;isBiFaced&gt; &lt;isBiWay&gt;</code></h4><p>This command modifies the portal cluster. It firstly removes the portals that are specific to the <code>player</code> and then adds new portals that are specific to the <code>player</code> and point to the specified dimension and position. <code>isBiFaced</code> and <code>isBiWay</code> respectively controls whether the generated portal is bi-faced and bi-way.</p><h4 id="portal-multidest-player" tabindex="-1"><a class="header-anchor" href="#portal-multidest-player" aria-hidden="true">#</a> <code>/portal multidest &lt;player&gt;</code></h4><p>Remove the player-specific portal from the portal cluster.</p><h3 id="other" tabindex="-1"><a class="header-anchor" href="#other" aria-hidden="true">#</a> Other</h3><h4 id="portal-set-portal-custom-name-name" tabindex="-1"><a class="header-anchor" href="#portal-set-portal-custom-name-name" aria-hidden="true">#</a> <code>/portal set_portal_custom_name &lt;name&gt;</code></h4><p>Set a portal entity&#39;s custom name. The custom name can be used for selecting the portal entity (for example @e[name=&quot;xxx&quot;]).</p><h4 id="portal-make-portal-round" tabindex="-1"><a class="header-anchor" href="#portal-make-portal-round" aria-hidden="true">#</a> <code>/portal make_portal_round</code></h4><p>Make the portal entity&#39;s shape to be an ellipse. If the portal&#39;s width equals height, the shape will be round.</p><h4 id="portal-reset-portal-orientation" tabindex="-1"><a class="header-anchor" href="#portal-reset-portal-orientation" aria-hidden="true">#</a> <code>/portal reset_portal_orientation</code></h4><p>Resets the portal orientation.</p><h4 id="portal-adjust-portal-to-fit-square-frame" tabindex="-1"><a class="header-anchor" href="#portal-adjust-portal-to-fit-square-frame" aria-hidden="true">#</a> <code>/portal adjust_portal_to_fit_square_frame</code></h4><p>Automatically adjust the portal size and position to fit a square frame. Can handle the frames that is not aligned with blocks (for example, fence blocks and end rod blocks).</p><h4 id="portal-set-portal-size-width-height" tabindex="-1"><a class="header-anchor" href="#portal-set-portal-size-width-height" aria-hidden="true">#</a> <code>/portal set_portal_size &lt;width&gt; &lt;height&gt;</code></h4><p>Remove the portal&#39;s custom shape, making it square and set its width and height.</p><h2 id="global-portal-commands" tabindex="-1"><a class="header-anchor" href="#global-portal-commands" aria-hidden="true">#</a> Global Portal Commands</h2><p>The global portal commands require level 2 permission.</p><h4 id="portal-global-convert-global-portal-to-normal-portal" tabindex="-1"><a class="header-anchor" href="#portal-global-convert-global-portal-to-normal-portal" aria-hidden="true">#</a> <code>/portal global convert_global_portal_to_normal_portal</code></h4><p>Can only be used by a player. Converts the global portal instance that you are pointing to into a normal portal. Requires the player to be near the portal center.</p><h4 id="portal-global-convert-normal-portal-to-global-portal" tabindex="-1"><a class="header-anchor" href="#portal-global-convert-normal-portal-to-global-portal" aria-hidden="true">#</a> <code>/portal global convert_normal_portal_to_global_portal</code></h4><p>Can only be used by a player. Converts the normal portal entity that you are pointing to into a global portal.</p><h4 id="portal-global-delete-global-portal" tabindex="-1"><a class="header-anchor" href="#portal-global-delete-global-portal" aria-hidden="true">#</a> <code>/portal global delete_global_portal </code></h4><p>Delete the global portal that you are pointing to.</p><h4 id="portal-global-create-inward-wrapping-x1-z1-x2-z2" tabindex="-1"><a class="header-anchor" href="#portal-global-create-inward-wrapping-x1-z1-x2-z2" aria-hidden="true">#</a> <code>/portal global create_inward_wrapping &lt;x1&gt; &lt;z1&gt; &lt;x2&gt; &lt;z2&gt;</code></h4><p>Create an inward wrapping zone. The created portals are global portals. The two XZ coordinates define the wrapping area. The generated portals go from y level 0 to y level 256.</p><h4 id="portal-global-create-outward-wrapping-x1-z1-x2-z2" tabindex="-1"><a class="header-anchor" href="#portal-global-create-outward-wrapping-x1-z1-x2-z2" aria-hidden="true">#</a> <code>/portal global create_outward_wrapping &lt;x1&gt; &lt;z1&gt; &lt;x2&gt; &lt;z2&gt;</code></h4><p>Similar to the above but creates an outward wrapping zone.</p><h4 id="portal-global-remove-wrapping-zone" tabindex="-1"><a class="header-anchor" href="#portal-global-remove-wrapping-zone" aria-hidden="true">#</a> <code>/portal global remove_wrapping_zone</code></h4><p>Remove the global portal wrapping zone that you are in. This does not work for the wrapping zone constituted by normal portals.</p><h4 id="portal-global-view-wrapping-zones" tabindex="-1"><a class="header-anchor" href="#portal-global-view-wrapping-zones" aria-hidden="true">#</a> <code>/portal global view_wrapping_zones</code></h4><p>View the wrapping zones in the current dimension and know their ids.</p><h4 id="portal-global-remove-wrapping-zone-id" tabindex="-1"><a class="header-anchor" href="#portal-global-remove-wrapping-zone-id" aria-hidden="true">#</a> <code>/portal global remove_wrapping_zone &lt;id&gt;</code></h4><p>Remove a global portal wrapping zone by its id.</p><h4 id="portal-global-connect-floor-dimensiona-dimensionb" tabindex="-1"><a class="header-anchor" href="#portal-global-connect-floor-dimensiona-dimensionb" aria-hidden="true">#</a> <code>/portal global connect_floor &lt;dimensionA&gt; &lt;dimensionB&gt;</code></h4><p>Creates a global portal that connects <code>dimensionA</code> &#39;s floor with <code>dimensionB</code> &#39;s top. It only generates one one-way global portal instance.</p><h4 id="portal-global-connect-ceil-dimensiona-dimensionb" tabindex="-1"><a class="header-anchor" href="#portal-global-connect-ceil-dimensiona-dimensionb" aria-hidden="true">#</a> <code>/portal global connect_ceil &lt;dimensionA&gt; &lt;dimensionB&gt;</code></h4><p>Creates a global portal that connects <code>dimensionA</code> &#39;s ceiling with <code>dimensionB</code> &#39;s bottom. It only generates one one-way global portal instance.</p><h4 id="portal-global-connection-remove-floor-dimension" tabindex="-1"><a class="header-anchor" href="#portal-global-connection-remove-floor-dimension" aria-hidden="true">#</a> <code>/portal global connection_remove_floor &lt;dimension&gt;</code></h4><p>Remove the floor connection portal in that dimension. This command only removes one global portal instance.</p><h4 id="portal-global-connection-remove-ceil-dimension" tabindex="-1"><a class="header-anchor" href="#portal-global-connection-remove-ceil-dimension" aria-hidden="true">#</a> <code>/portal global connection_remove_ceil &lt;dimension&gt;</code></h4><p>Remove the ceil connection portal in that dimension. This command only removes one global portal instance.</p><h2 id="direct-portal-creation-commands" tabindex="-1"><a class="header-anchor" href="#direct-portal-creation-commands" aria-hidden="true">#</a> Direct Portal Creation Commands</h2><p>Can be used by level-2 permission ones and creative mode players.</p><h4 id="portal-make-portal-width-height-dimension-tox-toy-toz" tabindex="-1"><a class="header-anchor" href="#portal-make-portal-width-height-dimension-tox-toy-toz" aria-hidden="true">#</a> <code>/portal make_portal &lt;width&gt; &lt;height&gt; &lt;dimension&gt; &lt;toX&gt; &lt;toY&gt; &lt;toZ&gt;</code></h4><p>Create a new portal coming off of the side of the block you&#39;re pointing at. The portal will face towards you.</p><h4 id="portal-make-portal-width-height-dimension-shift-distance" tabindex="-1"><a class="header-anchor" href="#portal-make-portal-width-height-dimension-shift-distance" aria-hidden="true">#</a> <code>/portal make_portal &lt;width&gt; &lt;height&gt; &lt;dimension&gt; shift &lt;distance&gt;</code></h4><p>Create a portal whiches destination is <code>distance</code> blocks in front of the portal.</p><h4 id="portal-create-small-inward-wrapping-x1-y1-z1-x2-y2-z2" tabindex="-1"><a class="header-anchor" href="#portal-create-small-inward-wrapping-x1-y1-z1-x2-y2-z2" aria-hidden="true">#</a> <code>/portal create_small_inward_wrapping &lt;x1&gt; &lt;y1&gt; &lt;z1&gt; &lt;x2&gt; &lt;y2&gt; &lt;z2&gt;</code></h4><p>Create a small inward wrapping zone. The generated portals are normal portals. (The global portal commands does not affect them.)</p><h4 id="portal-create-small-outward-wrapping-x1-y1-z1-x2-y2-z2" tabindex="-1"><a class="header-anchor" href="#portal-create-small-outward-wrapping-x1-y1-z1-x2-y2-z2" aria-hidden="true">#</a> <code>/portal create_small_outward_wrapping &lt;x1&gt; &lt;y1&gt; &lt;z1&gt; &lt;x2&gt; &lt;y2&gt; &lt;z2&gt;</code></h4><p>Similar to the above but the wrapping zone is outward.</p><h4 id="portal-create-scaled-box-view-x1-y1-z1-x2-y2-z2-scale-placetargetentity-isbiway-teleportchangesscale" tabindex="-1"><a class="header-anchor" href="#portal-create-scaled-box-view-x1-y1-z1-x2-y2-z2-scale-placetargetentity-isbiway-teleportchangesscale" aria-hidden="true">#</a> <code>/portal create_scaled_box_view &lt;x1&gt; &lt;y1&gt; &lt;z1&gt; &lt;x2&gt; &lt;y2&gt; &lt;z2&gt; &lt;scale&gt; &lt;placeTargetEntity&gt; &lt;isBiWay&gt; [teleportChangesScale]</code></h4><p>Note: <a href="https://www.curseforge.com/minecraft/mc-mods/miniscaled" target="_blank" rel="noopener noreferrer">MiniScaled</a> mod allows creating scale boxes easily.</p><p>Create a scaled box wrapping zone. <code>&lt;x1&gt; &lt;y1&gt; &lt;z1&gt; &lt;x2&gt; &lt;y2&gt; &lt;z2&gt;</code> defines the inner box area. <code>&lt;placeTargetEntity&gt;</code> defines the outer box position. If <code>isBiWay</code> is true, it will generate the reverse portals for every portal. <code>teleportChangesScale</code> defines the generated portal&#39;s <code>teleportChangesScale</code> attribute.</p><p>The command sender dimension is the dimension of the view box. For example, if you want to create a box viewing the end island, use <code>/execute in minecraft:the_end run portal create_scaled_box_view -100 0 -100 100 128 100 20 @p true</code> (<code>-100 0 -100 100 128 100</code> is a box with radius 100 on the end dimension, <code>20</code> is the scale, the outer box will be placed on <code>@p</code> &#39;s position)</p><figure><img src="https://i.loli.net/2021/11/20/n3zO8CYdRoMc2bl.png" alt=""></figure><h4 id="portal-create-scaled-box-view-optimized-x1-y1-z1-x2-y2-z2-scale-placetargetentity" tabindex="-1"><a class="header-anchor" href="#portal-create-scaled-box-view-optimized-x1-y1-z1-x2-y2-z2-scale-placetargetentity" aria-hidden="true">#</a> <code>/portal create_scaled_box_view_optimized &lt;x1&gt; &lt;y1&gt; &lt;z1&gt; &lt;x2&gt; &lt;y2&gt; &lt;z2&gt; &lt;scale&gt; &lt;placeTargetEntity&gt;</code></h4><p>Note: <a href="https://github.com/qouteall/MiniScaledMod/blob/1.17/README.md" target="_blank" rel="noopener noreferrer">MiniScaled</a> mod allows creating scale boxes easily.</p><p>Similar to the above but the created scale box has better rendering performance.</p><p>The outer portals will have &quot;fuse view&quot; enabled and &quot;rendering mergable&quot; enabled.</p><p>The inner portals will have &quot;rendering mergable&quot; enabled.</p><p>The portals will have &quot;teleport changes scale&quot; disabled.</p><p>This command requires that the scale box area is either aligned to chunk border (Press F3+G to see the chunk border) or does not have anything around that area (for example, a skyland). Because the merged portal rendering does not handle the front clipping well, if this requirement is not meet, the things outside the box may appear in view.</p><h4 id="portal-cb-make-portal-width-height-fromentity-toentity-portalname" tabindex="-1"><a class="header-anchor" href="#portal-cb-make-portal-width-height-fromentity-toentity-portalname" aria-hidden="true">#</a> <code>/portal cb_make_portal &lt;width&gt; &lt;height&gt; &lt;fromEntity&gt; &lt;toEntity&gt; [portalName]</code></h4><p>Create a portal entity that goes from <code>fromEntity</code> to <code>toEntity</code>. The portal&#39;s orientation is determined by <code>fromEntity</code> &#39;s orientation.</p><p>If the <code>portalName</code> is present, the generated portal will have the custom name. You can then select that portal using <code>@e[name=&quot;xxx&quot;]</code>.</p><h4 id="portal-create-connected-rooms-roomsize-sizex-sizey-sizez-roomnumber-roomnumber" tabindex="-1"><a class="header-anchor" href="#portal-create-connected-rooms-roomsize-sizex-sizey-sizez-roomnumber-roomnumber" aria-hidden="true">#</a> <code>/portal create_connected_rooms roomSize &lt;sizeX&gt; &lt;sizeY&gt; &lt;sizeZ&gt; roomNumber &lt;roomNumber&gt;</code></h4><p>Create some rooms near you and generate portals to connect these rooms. The rooms will be made by random blocks. For example <code>/portal create_connected_room roomSize 8 8 5 roomNumber 10</code></p><h2 id="miscellaneous-commands" tabindex="-1"><a class="header-anchor" href="#miscellaneous-commands" aria-hidden="true">#</a> Miscellaneous Commands</h2><p>Can be used by creative mode players and permission 2 ones.</p><h4 id="portal-tpme-dimension-x-y-z" tabindex="-1"><a class="header-anchor" href="#portal-tpme-dimension-x-y-z" aria-hidden="true">#</a> <code>/portal tpme &lt;dimension&gt; &lt;x&gt; &lt;y&gt; &lt;z&gt;</code></h4><p>Teleport you across dimensions without any loading screen. Can only be invoked by players.</p><h4 id="portal-tp-entity-dimension-x-y-z" tabindex="-1"><a class="header-anchor" href="#portal-tp-entity-dimension-x-y-z" aria-hidden="true">#</a> <code>/portal tp &lt;entity&gt; &lt;dimension&gt; &lt;x&gt; &lt;y&gt; &lt;z&gt;</code></h4><p>Teleport entities across dimensions.</p><h4 id="portal-goback" tabindex="-1"><a class="header-anchor" href="#portal-goback" aria-hidden="true">#</a> <code>/portal goback</code></h4><p>Sometimes you went into a one-way portal and want to come back, but you forgot the coordinate where you come in. Use this command to come back.</p><h4 id="portal-adjust-rotation-to-connect-portal1-portal2" tabindex="-1"><a class="header-anchor" href="#portal-adjust-rotation-to-connect-portal1-portal2" aria-hidden="true">#</a> <code>/portal adjust_rotation_to_connect &lt;portal1&gt; &lt;portal2&gt;</code></h4><p>By specifying 2 portal entities, it will change these 2 portals&#39; destination and rotation transformation to make them connect.</p><h4 id="portal-dimension-stack" tabindex="-1"><a class="header-anchor" href="#portal-dimension-stack" aria-hidden="true">#</a> <code>/portal dimension_stack</code></h4><p>Shows a GUI that allows re-configuring the dimension stack.</p><h2 id="dimension-management-commands" tabindex="-1"><a class="header-anchor" href="#dimension-management-commands" aria-hidden="true">#</a> Dimension Management Commands</h2><p>These commands are provided by mod <code>q_misc_util</code> (this mod is bundled by Immersive Portals).</p><h4 id="dims-clone-dimension-templatedimension-newdimensionid" tabindex="-1"><a class="header-anchor" href="#dims-clone-dimension-templatedimension-newdimensionid" aria-hidden="true">#</a> <code>/dims clone_dimension &lt;templateDimension&gt; &lt;newDimensionID&gt;</code></h4><p>Dynamically add a new dimension. That new dimension&#39;s dimension type and chunk generator will be the same as the <code>templateDimension</code>.</p><p>This command only clones the dimension type and world generator. It will not clone the things in world (blocks, entities, ...).</p><p>Example: <code>/dims clone_dimension minecraft:overworld &quot;aaa:bbb&quot;</code> will dynamically add dimension <code>aaa:bbb</code> whiches world generation is the same as the overworld.</p><p>The configuration of the new dimensions will be saved in the <code>q_dimension_configs</code> folder in the world saving.</p><h4 id="dims-remove-dimension-dimension" tabindex="-1"><a class="header-anchor" href="#dims-remove-dimension-dimension" aria-hidden="true">#</a> <code>/dims remove_dimension &lt;dimension&gt;</code></h4><p>Dynamically remove a dimension.</p><p>This command will not delete the world saving of that dimension. If you re-add that dimension, its blocks and entities will still be there.</p><h2 id="debugging-commands" tabindex="-1"><a class="header-anchor" href="#debugging-commands" aria-hidden="true">#</a> Debugging Commands</h2><p>Can be used by creative mode players and permission 2 ones.</p><h4 id="portal-debug-gui-portal-dimension-x-y-z" tabindex="-1"><a class="header-anchor" href="#portal-debug-gui-portal-dimension-x-y-z" aria-hidden="true">#</a> <code>/portal debug gui_portal &lt;dimension&gt; &lt;x&gt; &lt;y&gt; &lt;z&gt;</code></h4><p>Load the chunks near the specific position and display a GUI portal for the player. Used for testing GUI portal functionality.</p><p>For example, <code>/portal debug gui_portal minecraft:the_end 0 80 0</code></p><figure><img src="https://i.loli.net/2021/06/07/AKBYLdxikuEUR6o.png" alt=""><figcaption>gui_portal.png</figcaption></figure><p>Press ESC to quit.</p><h4 id="portal-debug-isometric-enable-viewheight" tabindex="-1"><a class="header-anchor" href="#portal-debug-isometric-enable-viewheight" aria-hidden="true">#</a> <code>/portal debug isometric_enable &lt;viewHeight&gt;</code></h4><p>Enable the experimental isometric view for the player. <code>viewHeight</code> is the corresponding length of the screen height.</p><p>For example, <code>/portal debug isometric_enable 100</code></p><figure><img src="https://i.loli.net/2021/06/27/2OWzeKhQNcZDIgl.png" alt=""><figcaption>2021-02-05-15-25-05.png</figcaption></figure><p>Isometric view is implemented by replacing the projection matrix with the orthogonal projection matrix. Isometric view equivalents the camera being in an infinitely far place.</p><h4 id="portal-debug-isometric-disable" tabindex="-1"><a class="header-anchor" href="#portal-debug-isometric-disable" aria-hidden="true">#</a> <code>/portal debug isometric_disable</code></h4><p>Quit the isometric view for the player.</p><h4 id="portal-debug-align" tabindex="-1"><a class="header-anchor" href="#portal-debug-align" aria-hidden="true">#</a> <code>/portal debug align</code></h4><p>Align the player position by 0.5, set the yaw to be 45 degrees and set the pitch to be 30 degrees. Can be used for taking isometric screenshots.</p><h4 id="portal-debug-create-command-stick-command" tabindex="-1"><a class="header-anchor" href="#portal-debug-create-command-stick-command" aria-hidden="true">#</a> <code>/portal debug create_command_stick &lt;command&gt;</code></h4><p>Creates a command stick . For example <code>/portal debug create_command_stick &quot;/say hi&quot;</code></p><p>This command requires level 2 permission.</p><h4 id="portal-debug-accelerate-num" tabindex="-1"><a class="header-anchor" href="#portal-debug-accelerate-num" aria-hidden="true">#</a> <code>/portal debug accelerate &lt;num&gt;</code></h4><p>Accelerate the player along the view direction. This is originally used for debugging collision issue, and then turns out to be useful for travelling.</p><h4 id="portal-debug-erase-chunk-radius-downy-upy" tabindex="-1"><a class="header-anchor" href="#portal-debug-erase-chunk-radius-downy-upy" aria-hidden="true">#</a> <code>/portal debug erase_chunk &lt;radius&gt; [downY] [upY]</code></h4><p>Erase the blocks of the chunks near you. Can be used for checking dimension stack status. Requires level 3 permission.</p><h4 id="portal-debug-profile-gc" tabindex="-1"><a class="header-anchor" href="#portal-debug-profile-gc" aria-hidden="true">#</a> <code>/portal debug profile gc</code></h4><p>Call <code>System.gc()</code> and show the memory usage. Requires level 4 permission.</p><p>Note: The memory usage is influenced by many random factors. To test whether it has a memory leak, you should run the game for at least 5 minutes.</p><h4 id="portal-debug-report-resource-consumption" tabindex="-1"><a class="header-anchor" href="#portal-debug-report-resource-consumption" aria-hidden="true">#</a> <code>/portal debug report_resource_consumption</code></h4><p>Show chunk loading numbers.</p><h4 id="portal-debug-report-player-status" tabindex="-1"><a class="header-anchor" href="#portal-debug-report-player-status" aria-hidden="true">#</a> <code>/portal debug report_player_status</code></h4><p>Show the player&#39;s current dimension, position and entity status both on client side and server side.</p><h4 id="portal-debug-is-chunk-loaded-x-z" tabindex="-1"><a class="header-anchor" href="#portal-debug-is-chunk-loaded-x-z" aria-hidden="true">#</a> <code>/portal debug is_chunk_loaded &lt;x&gt; &lt;z&gt;</code></h4><p>Shows if the chunk is loaded in your current dimension on client side and server side.</p><h4 id="portal-debug-report-chunk-loaders" tabindex="-1"><a class="header-anchor" href="#portal-debug-report-chunk-loaders" aria-hidden="true">#</a> <code>/portal debug report_chunk_loaders</code></h4><p>Report the chunk loaders originated by you.</p>',190);function r(i,l){return o}var d=e(t,[["render",r],["__file","Commands-Reference.html.vue"]]);export{d as default};
