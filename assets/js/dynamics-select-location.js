var districts = {
    'phnom-penh': [
        { value: 'tuol-tom-poung', text: 'ខណ្ឌទួលទំពូង' },
        { value: 'chamkarmon', text: 'ខណ្ឌចំការមន' },
    ],
    'banteay-meanchey': [
        { value: 'serei-saophoan', text: 'ក្រុងសិរីសោភ័ណ' },
        { value: 'mongkol-borei', text: 'ស្រុកមង្គលបុរី' }
    ],
    'tbong-khmum': [
        { value: 'suong', text: 'ក្រុងសួង' },
        { value: 'tbong-khmum', text: 'ស្រុកត្បូងឃ្មុំ' },
    ],
};

var communes = {
    'chamkarmon': [
        { value: 'tuol-tom-poung2', text: 'សង្កាត់ទួលទំពូង២' },
        { value: 'phsar-daem-thkov', text: 'សង្កាត់ផ្សារដើមថ្កូវ' }
    ],
    'tbong-khmum': [
        { value: 'sralab', text: 'ឃុំស្រឡប់' },
        { value: 'suong', text: 'សង្កាត់សួង' },
        { value: 'anhchaeum', text: 'ឃុំអញ្ចើម' },
        { value: 'chub', text: 'ឃុំជប់' },
        { value: 'roka po pram', text: 'ឃុំរកាពប្រាំ' },
        { value: 'peam chileang', text: 'ឃុំពាមជីលាំង' },
        { value: 'tonle bet', text: 'ឃុំទន្លេបិទ' },
        { value: 'chirou muoy', text: 'ឃុំជីរោទ៍ទី ១' },
        { value: 'lngieng', text: 'ឃុំល្ងៀង' },
        { value: 'moung riev', text: 'ឃុំមង់វៀរ' },
    ]
};

var villages = {
    'tuol-tom-poung2': [
        { value: 'village-1', text: 'ភូមិទី១' },
        { value: 'village-2', text: 'ភូមិទី២' },
        { value: 'village-3', text: 'ភូមិទី៣' },
        { value: 'village-4', text: 'ភូមិទី៤' },
    ],
    'phsar-daem-thkov': [
        { value: 'village-1', text: 'ភូមិទី១' },
        { value: 'village-2', text: 'ភូមិទី២' }
    ],
    'sralab': [
        { value: 'angkor chey', text: 'ភូមិអង្គរជ័យ' },
        { value: 'angkor chea', text: 'ភូមិអង្គរជា' },
        { value: 'trabos', text: 'ភូមិត្របុស្ស' },
        { value: 'khnar', text: 'ភូមិខ្នារ' },
        { value: 'nikom leu', text: 'ភូមិនិគមលើ' },
        { value: 'nikum kraom', text: 'ភូមិនិគមក្រោម' },
        { value: 'trapeang thum', text: 'ភូមិត្រពាំងធំ' },
        { value: 'chan toung', text: 'ភូមិចាន់ទូង' },
        { value: 'trapeang kur', text: 'ភូមិត្រពាំងគូរ' },
        { value: 'veal khnach', text: 'ភូមិវាលខ្នាច' },
    ],
};

document.getElementById('province').addEventListener('change', function () {
    var province = this.value;
    var districtSelect = document.getElementById('district');
    districtSelect.innerHTML = '<option selected>ជ្រើសរើសទីតាំងរបស់អ្នក</option>';
    document.getElementById('commune').innerHTML = '<option selected>ជ្រើសរើសទីតាំងរបស់អ្នក</option>';
    document.getElementById('village').innerHTML = '<option selected>ជ្រើសរើសទីតាំងរបស់អ្នក</option>';

    if (province && districts[province]) {
        districts[province].forEach(function (district) {
            var option = document.createElement('option');
            option.value = district.value;
            option.text = district.text;
            districtSelect.appendChild(option);
        });
    }
});

document.getElementById('district').addEventListener('change', function () {
    var district = this.value;
    var communeSelect = document.getElementById('commune');
    communeSelect.innerHTML = '<option selected>ជ្រើសរើសទីតាំងរបស់អ្នក</option>';
    document.getElementById('village').innerHTML = '<option selected>ជ្រើសរើសទីតាំងរបស់អ្នក</option>';

    if (district && communes[district]) {
        communes[district].forEach(function (commune) {
            var option = document.createElement('option');
            option.value = commune.value;
            option.text = commune.text;
            communeSelect.appendChild(option);
        });
    }
});

document.getElementById('commune').addEventListener('change', function () {
    var commune = this.value;
    var villageSelect = document.getElementById('village');
    villageSelect.innerHTML = '<option selected>ជ្រើសរើសទីតាំងរបស់អ្នក</option>';

    if (commune && villages[commune]) {
        villages[commune].forEach(function (village) {
            var option = document.createElement('option');
            option.value = village.value;
            option.text = village.text;
            villageSelect.appendChild(option);
        });
    }
});
