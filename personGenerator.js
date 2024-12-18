const personGenerator = {
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

    getPerson: function () {
        this.person = {};
        // this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurName();
        return this.person;
    }
};
