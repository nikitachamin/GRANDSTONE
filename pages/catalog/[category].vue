<script setup>
import img1 from '@/assets/img/tombs/offers/1.png';
import img2 from '@/assets/img/tombs/offers/2.png';
import img3 from '@/assets/img/tombs/offers/3.png';
const route = useRoute();
const categoryName = route.params.category; // Значение из URL (например: "electronics")

const cards = 
    {
   
        straight: [
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 1 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 2 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 3 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 4 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 5 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 6 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 7 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 8 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 9 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 10 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 11 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 12 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 13 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 14 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 15 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 16 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 17 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 18 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 19 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 20 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 21 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 22 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 23 },
        { img: img1, title: "Гранитный комплекс", price: 12000, id: 24 }]
     ,
    

        comb: [
        { img: img2, title: "Гранитный комплекс", price: 12000, id: 5 },
        { img: img2, title: "Гранитный комплекс", price: 12000, id: 6 },
        { img: img2, title: "Гранитный комплекс", price: 12000, id: 7 },
        { img: img2, title: "Гранитный комплекс", price: 12000, id: 8 }]
    };



const breadCrumbLabel = computed(() => {
  const categoryMap = {
    straight: 'Памятники прямые',
    comb: 'Памятники комбинированные',
  }
  
  return categoryMap[categoryName] || categoryName;
})

const currentCards = computed(() => {
  return cards[categoryName] || [] // Возвращаем массив карточек или пустой массив
})


</script>


<template>

   <section class="category-section">
        <div class="header">
            <div class="bread-crumps">
                <NuxtLink class="bread-crum" to="/">Главная</NuxtLink> /
                <NuxtLink class="bread-crum" to="/catalog">Каталог</NuxtLink> /
                <NuxtLink class="bread-crum _active" :to="`/catalog/${categoryName}`">{{breadCrumbLabel}}</NuxtLink>
            </div>
            <h3>{{breadCrumbLabel}}</h3>
        </div>
         <div class="offers">
                <div class="offer-card" v-for="card in currentCards" :key="card.id">
                    <img :src="card.img" :alt="card.title">
                    <div class="card-info">
                        <h3>{{ card.title }}</h3>
                        <p>от {{ card.price }}</p>
                        <button>Подробнее</button>
                    </div>
                </div>
            </div>

        <div class="category-info">
            <div><p>Прямые памятники — это универсальный и традиционный вид надгробий, которые подходят для оформления как одиночных, так и семейных мест захоронения. Строгая геометрия, чёткие линии и сдержанный дизайн позволяют сосредоточить внимание на важном: памяти о близком человеке. Изготавливаем прямые памятники из высококачественного натурального камня — гранита, мрамора и габбро. Каждый памятник проходит многоступенчатую обработку, включая полировку, гравировку и финишную доработку, что обеспечивает долговечность, износостойкость и презентабельный внешний вид на протяжении десятилетий. В нашем каталоге представлены прямые памятники разных размеров, форм и цветовых решений. Вы можете выбрать лаконичную классическую модель или заказать изготовление по индивидуальному эскизу с портретной гравировкой, эпитафией, декоративными элементами или барельефами.</p></div>
        </div>
        <p>Читать все</p>
   </section>
</template>

<style lang="scss" scoped>
@reference "tailwindcss";

.category-section {
    @apply max-w-360;
    @apply flex;
    @apply flex-col;
    @apply mx-auto;
    @apply mt-12;
    @apply mb-24;

}

.bread-crum {
    color: var(--Black-Color-600, #5D5D5D);
    font-family: "Golos Text";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem;
    /* 175% */
    letter-spacing: -0.01rem;
    text-decoration: none;
}
._active{
   color: var(--Black-Color-950, #000);
}
.header h3 {
    color: #000;
    font-family: "Golos Text";
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.25rem;
    /* 150% */
    letter-spacing: 0.00888rem;
}
.offers {
    @apply flex;
    @apply gap-6;
    @apply flex-wrap;

}

.offer-card img {
    @apply h-[21.785rem];
    @apply w-[21.375rem];
    background-color: #F6F6F6;
}

.card-info {
    @apply p-4;
}

.card-info h3 {
    color: #000;
    font-family: "Golos Text";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2rem;
    /* 160% */
    letter-spacing: -0.00325rem;
}

.card-info p {
    color: #000;
    font-family: "Golos Text";
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.75rem;
    /* 175% */
    letter-spacing: 0.00588rem;
}

.card-info button {
    display: flex;
    height: 3.25rem;
    padding: 0.75rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    align-self: stretch;
    border-radius: 0.25rem;
    @apply w-full;
    border: 1px solid rgba(0, 0, 0, 0.05);
    @apply bg-[#FFF];
}
.category-info{
    color: var(--Black-Color-300, #B0B0B0);
    font-family: "Golos Text";
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.75rem; /* 175% */
    letter-spacing: -0.01rem;
    @apply mt-12;
}

@media(max-width: 1024px) {
    .category-section{
        @apply mx-8;
    }
    .offers{
        @apply flex-wrap;
        @apply gap-6;
    }
    .offer-card{
        @apply w-117;
    }
    .offer-card img {
    @apply h-87;
    @apply w-117;
    background-color: #F6F6F6;
}
}

@media(max-width: 1024px) {
    .offer-card{
        @apply w-104;
    }
    .offer-card img {
    @apply h-87.5;
    @apply w-104;
  
}
}
</style>