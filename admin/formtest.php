<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/>
  <link href="../css/snow.css" rel="stylesheet">
  	<script src="../js/jquery-3.2.1.min.js"></script>
</head>

<body>
  <button type="button" name="button" id="butbut" > ss</button>
  <!-- Create the editor container -->
  <div id="hid" style="display:none;">
    <div id="editor">
      <p>Hello World!</p>
    </div>
  </div>


  <!-- Include the Quill library -->
  <script src="../js/quil.min.js"></script>

  <!-- Initialize Quill editor -->
  <script>

  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],

    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction

    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['video'],
    ['image'],
    ['clean']                                         // remove formatting button
  ];

  var quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'
  });
  $('#butbut').on('click',function(){
    $('#hid').css('display', 'block');
  });
  </script>
</body>
</html>
