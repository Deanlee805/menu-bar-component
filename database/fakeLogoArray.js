const fakeLogosArray = [
  'https://static-cdn.jtvnw.net/jtv_user_pictures/a_seagull-profile_image-4d2d235688c7dc66-70x70.png',
  'https://s3.amazonaws.com/uifaces/faces/twitter/oskarlevinson/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/joelhelin/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/clubb3rry/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/prrstn/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/instalox/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/haligaliharun/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/ernestsemerda/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/ismail_biltagi/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/turkutuuli/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/dawidwu/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/hjartstrorn/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/baumann_alex/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/Chakintosh/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/twittypork/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/supjoey/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/christianoliff/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/mr_subtle/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/emsgulam/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/drewbyreese/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/vocino/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/ma_tiax/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/surgeonist/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/louis_currie/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/danthms/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/pehamondello/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/michigangraham/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/lvovenok/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/beweinreich/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/kerem/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/m_kalibry/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/zauerkraut/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/arthurholcombe1/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/marcobarbosa/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/chris_frees/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/stushona/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/ricburton/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/agromov/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/malgordon/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/mymyboy/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/_kkga/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/cbracco/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/olaolusoga/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/ahmetsulek/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/ariffsetiawan/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/edgarchris99/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/mcflydesign/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/ripplemdk/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/joemdesign/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/richwild/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/sachacorazzi/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/guischmitt/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/prinzadi/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/weglov/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/1markiz/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/mrebay007/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/allfordesign/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/thierrykoblentz/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/abdulhyeuk/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/angelcolberg/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/afusinatto/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/trueblood_33/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/hafeeskhan/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/mahdif/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/angelcreative/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/samihah/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/colirpixoil/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/digitalmaverick/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/longlivemyword/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/rohixx/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/victorerixon/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/bluefx_/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/yalozhkin/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/bungiwan/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/felipecsl/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/rodnylobos/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/itolmach/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/adobi/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/edobene/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/rickdt/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/jacobbennett/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/jlsolerdeltoro/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/mrjamesnoble/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/bu7921/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/mattsapii/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/waghner/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/eitarafa/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/kostaspt/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/megdraws/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/smenov/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/mattsapii/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/stefooo/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/heyimjuani/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/bolzanmarco/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/xalionmalik/128.jpg',
  'https://s3.amazonaws.com/uifaces/faces/twitter/madysondesigns/128.jpg'
];

module.exports = fakeLogosArray;