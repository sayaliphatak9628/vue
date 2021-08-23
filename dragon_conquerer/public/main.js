const getRandom = (min,max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data(){
        return{
            warriorHealth: 100,
            dragonHealth: 100,
            numOfSpecialAttack : 3,
            numofHeal: 3,
            winner: null,
            battleLogMessage: [],
            swordSlash: new Audio('../sounds/sword-slash.mp3'),
            dragonBreath: new Audio('../sounds/dragon-breath.wav'),
            healEffect: new Audio('../sounds/heal.mp3'),
            specialAttack: new Audio('../sounds/special-attack.mp3')
    
        }
    },
    watch: {
        warriorHealth(value){
            if(value <= 0 && this.dragonHealth <= 0){
                //draw
                this.winner = 'draw';
            } else if (value <= 0) {
                this.winner = "dragon";
            }
        },

        dragonHealth(value){
            if(value <= 0 && this.warriorHealth <= 0){
                this.winner = "draw";
            } else if(value <= 0){
                this.winner = "warrior";
            }
        }
    },
    computed: {
        warriorHealthBar(){
            if(this.warriorHealth < 0){
                return {width: '0%'};
            } else{
                if(this.warriorHealth <= 50){
                    return {width: this.warriorHealth + '%', background:"red"}
                }else{
                    return {width: this.warriorHealth + '%'};
                }
            }
        },
        dragonHealthBar(){
            if(this.dragonHealth < 0){
                return {width: '0%'};
            } else{
                if(this.dragonHealth <= 50){
                    return {width: this.dragonHealth + '%', background:"red"}
                }else{
                    return {width: this.dragonHealth + '%'};
                }
            }
        }
    },
    methods:{
        startFight(){
           this.warriorHealth= 100,
            this.dragonHealth= 100,
            this.numOfSpecialAttack = 3,
            this.numofHeal= 3,
            this.winner= null,
            this.battleLogMessage= []
        },

        attackDragon(){
            const attackDamage = getRandomValue(6,15)
            //check if dragons health is greater than zero first
            if(this.dragonHealth - attackDamage < 0){
                this.dragonHealth = 0;
            } else{
                this.dragonHealth -= attackDamage;
            }
            this.swordSlash.play();
            this.addBattleLog('warrior','attack',attackDamage);
            this.attackWarrior();
        },

        attackWarrior(){
            const attackDamage = getRandomValue(6,15)
            //check if dragons health is greater than zero first
            if(this.warriorHealth - attackDamage < 0){
                this.warriorHealth = 0;
            } else{
                this.warriorHealth -= attackDamage;
            }
           setTimeout(() => {
               this.dragonBreath.play();
               setTimeout(() =>
                this.dragonBreath.pause());
           },2000)
           this.addBattleLog('dragon','attack', attackDamage);  
           
        }, 0),


        specialAttack(){
            this.numofHeal --;
            const Heal = getRandomValue(10,25);
            if(this.dragonHealth - attackDamage < 0){
                this.dragonHealth = 0;
            } else{
                this.specialAttackEffect.play();
                this.dragonHealth -= attackDamage;
            }
            this.addBattleLog('warrior', 'special-attack', attackDamage );
            this.attackWarrior();
        }
    
        heal:{
            this.numofHeal --;
            const Heal = getRandomValue(10,25);
            if(this.dragonHealth + healValue > 100){
                this.dragonHealth = 100;
            } else{
               
                this.dragonHealth += healValue;
            }
            this.healEffect.play();
            this.addBattleLog('warrior','heal',healValue);
            this.attackWarrior();
        }
    
        forfeit(){
            this.winner = "dragon"
        },
    
        addBattleLog(who, what, value){
            this.battleLogMessage(){ 
                attacker= who,
                actionType= what,
                actionValue= value
            }
        }
}

app.mount('#game')