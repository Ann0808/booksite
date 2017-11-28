
var items = document.querySelectorAll("#carouselPurchased"+' .carusel__item'); // ������ ����������������� ���������
var len = items.length; // ���������� ���������
var parent = document.querySelector("#carouselPurchased"+'.carusel'); // �������� ��������
var Next = parent.querySelector('.next'); // ������ ������
var Prev = parent.querySelector('.prev'); // ������ �����
var i = 0; // 0 ������������ ������� ��������, ��� �������������� ��������
var el = 0; // ���������� �������������� ���������, ����� �������������� ���� � ������������ �������
var new_el = 2;
var click = 0; // ���������� ��� ��������� ������

var timerId = setInterval(function() { // ����� ����� �������������� el
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); // ������ ������ ��������
    switch(true) { // � ��������� �� ������ ���������� el
      case w<=768:  new_el = 2;
                    break;  
      case w<=1200: new_el = 3;
                    break; 
      case w>1200: new_el = 4;
                    break;
    }
    if(el!=new_el) {
        el = new_el;
         for(var k = 0; k < len; k++) {                  // ��������� �� ���� ���������
            if(k<el) {                                  // ����������� ��������� ������ ������� � ���������� ��
                get_item(k+i).style.order = k;
                get_item(k+i).style.display = "block";
            } else {                                    // ��������� �������� ������� � ���������� order
                get_item(k+i).style.order = "auto";
                get_item(k+i).style.display = "none";
            }
        }
    }     
}, 10); // �������� ��������

function get_item(m) { // ���������� ������� �������, �������� �� ��������� ��� ������ �� �������
    switch(m) {
        case -1: return items[len-1]; // ���� ����� ������� �� 1 ������ �������, �� ���������� ���������
            break;
        case -2: return items[len-2];
            break;
        case -3: return items[len-3];
            break;
        case -4: return items[len-4];
            break;
        case len: return items[0];  // ���� ����� ������� �� 1 ������ ����������, �� ���������� ������
            break;
        case len+1: return items[1];
            break;
        case len+2: return items[2];
            break;
        case len+3: return items[3];
            break;
        default: return items[m];
            break;
    }
}

Next.addEventListener('click', function(event) {            // ������������ ���� ������
    event.preventDefault();
    if (click == 0) {
        click = 1;                                          // ����� ������� ����������� �������� �������� � ��� �������
        for(var k = 0; k < el+1; k++) {                     // ��������� ������� ������ � ����������� ���� ����� order
            get_item(k+i).style.order = k;
            get_item(k+i).style.display = "block";
        }
        get_item(i).classList.add("carusel--move-left");    //��������� ��������
        i = i + 1;                                          // �������� �������� i
        if (i==len) {
            i=0; 
        }  
        setTimeout(function() {                             // ���������� ����� 300 ����������� (����� ������� ��������)
            get_item(i-1).style.order = "auto";             // �������� ������� ����� � ���������� ��� order
            get_item(i-1).style.display = "none";
            for(var k = 0; k<len; k++) {
                get_item(k).classList.remove("carusel--move-left"); // ������� �������� � ���� (�� ������)
            }
        }, 300);
    }
    setTimeout(function() {                                      // ����� ��������� ���� �� ��������� ������� ����
        click=0;
    },1000);
});


Prev.addEventListener('click', function(event) {                   // ������������ ���� �����
    event.preventDefault();
    if(click==0) {
        click = 1;                                               // ����� ������� ����������� �������� �������� � ��� �������
        for(var k = 0; k < el+1; k++) {                          // ��������� ������� ����� � ����������� ���� ����� order
            get_item(k+i-1).style.order = k;
            get_item(k+i-1).style.display = "block";
        }
        get_item(i-1).classList.add("carusel--move-right");       // ��������� ��������
        get_item(i+el-1).classList.add("carusel--opacity");      // ��������� ��������
        i = i - 1;            // �������� �������� i
        if (i == -1) {
            i = len - 1;
        }
        setTimeout(function() {                                  // ���������� ����� 300 ����������� (����� ������� ��������)
            get_item(i+el).style.order = "auto";                // �������� ������� ������ � ���������� ��� order
            get_item(i+el).style.display = "none";
            for(var k = 0; k<len; k++) {
                get_item(k).classList.remove("carusel--opacity");    // ������� �������� � ���� (�� ������)
                get_item(k).classList.remove("carusel--move-right");
            }
        }, 300);  
    }
    setTimeout(function() {                                           // ����� ��������� ���� �� ��������� ������� ����
        click=0;
    },1000);
});

Next.addEventListener('dblclick', function(event) {            // ������� ���� ������ �� ������ � ��������� ����� ��� �� �������
    event.preventDefault();
    click = 1;   
    setTimeout(function() {
        click=0;
    },1000);
});

Prev.addEventListener('dblclick', function(event) {            // ������� ���� ������ �� ������ � ��������� ����� ��� �� �������
    event.preventDefault();
    click = 1;   
    setTimeout(function() {
        click=0;
    },1000);
});