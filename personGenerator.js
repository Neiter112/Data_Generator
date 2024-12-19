const personGenerator = {
    //Фамилии
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    //Мужские имена
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    //Женские имена
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Екатерина",
            "id_3": "Анастасия",
            "id_4": "Мария",
            "id_5": "Анна",
            "id_6": "Юлия",
            "id_7": "Елизавета",
            "id_8": "Кристина",
            "id_9": "Любовь",
            "id_10": "Елена"
        }
    }`,

    //Мужские проффессии
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Программист",
            "id_2": "Слесарь",
            "id_3": "Токарь",
            "id_4": "Инженер",
            "id_5": "Грузчик",
            "id_6": "Электрик",
            "id_7": "Сантехник",
            "id_8": "Шахтер",
            "id_9": "Летчик",
            "id_10": "Хоккеист"
        }
    }`,

    //Женские проффесии
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Бухгалтер",
            "id_2": "Швея",
            "id_3": "Домохохяйка",
            "id_4": "Секретарь",
            "id_5": "Сиделка",
            "id_6": "Уборщица",
            "id_7": "Библиотекарь",
            "id_8": "Стилист",
            "id_9": "Парикмахер",
            "id_10": "Медсестра"
        }
    }`,

    //Месяцы где 31 день
    month31Json: `{
        "count": 7,
        "list": {     
            "id_1": "Января",
            "id_2": "Марта",
            "id_3": "Мая",
            "id_4": "Июля",
            "id_5": "Августа",
            "id_6": "Октяря",
            "id_7": "Декабря"
        }
    }`,

    //Месяцы где 30 дней
    month30Json: `{
        "count": 4,
        "list": {     
            "id_1": "Апреля",
            "id_2": "Июня",
            "id_3": "Сентября",
            "id_4": "Ноября"
        }
    }`,


    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomGender: function() {
        return Math.floor(Math.random() * 2) == 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
     },

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    // Генерация имени 
    randomFirstName: function() {
      if (this.person.gender == 'Мужчина') {
        return this.randomValue(this.firstNameMaleJson);
      } 
      else {
        return this.randomValue(this.firstNameFemaleJson);
       }
    },

    // Генерация фамилии 
     randomSurName: function() {
        if (this.person.gender == 'Мужчина') {
          return this.randomValue(this.surnameJson);
        }
        else {
          return this.randomValue(this.surnameJson) + 'а';
        }  
    },

    //Генерация Отчества
    randomMiddleName: function() { 
        middleName = this.randomValue(this.firstNameMaleJson);
        if (this.person.gender == 'Мужчина') {
            if (middleName.includes('й')) {
                middleName = middleName.replace("й", "евич");
            } else
            if (middleName.includes('Никита')) {
                middleName = middleName.replace("а", "ич");
            } else
                middleName = middleName + "ович";
        } else
 
        if (this.person.gender == 'Женщина') {
            if (middleName.includes('й')) {
                middleName = middleName.replace("й", "евна");
            } else
            if (middleName.includes('Никита')) {
                middleName = middleName.replace("а", "ична");
            } else
                middleName = middleName + "овна"; 
        }
        return middleName;
    },

    //Год рождения
    randomBirthday: function() { 
        if (Math.floor(Math.random() * 3) == 0) {
            year = this.randomIntNumber(2006, 1960);
            month = this.randomValue(this.month31Json);
            day = this.randomIntNumber(31, 1);
        } else 
        if (Math.floor(Math.random() * 3) == 1) {
            year = this.randomIntNumber(2006, 1960);
            month = this.randomValue(this.month30Json);
            day = this.randomIntNumber(30, 1);
        } 
        birthday = day + ' ' + month + ' ' + year + " года рождения"; 
        return birthday;
      },

    //Генерация профессси
      randomProfession: function() {
        if (this.person.gender == 'Мужчина') {
          return this.randomValue(this.professionMaleJson);
        }
        else {
          return this.randomValue(this.professionFemaleJson);
        }  
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurName();
        this.person.middleName = this.randomMiddleName();
        this.person.birthday = this.randomBirthday();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};
