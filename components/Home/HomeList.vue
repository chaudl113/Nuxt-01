<template>
  <div class="col-md-4">
    <div class="course-card">
      <div class="card-image">
        <img :src="thumbnail" :alt="`Thumbnail of ${name}`" />
      </div>
      <div class="card-content">
        <h3>{{ description }}</h3>
        <span class="instructor"> {{ name }} </span>
        <div class="course-card-foot">
          <div class="star-rating">
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star']" />
            <font-awesome-icon :icon="['fas', 'star-half']" />
          </div>
          <span class="pricing"> $14.99 </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    description: { type: String, default: '' },
    thumbnail: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.card-image {
  width: 100%;
  height: 150px;
  align-items: center;
  background-color: #fff;
  border: 1px solid #eee;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1000;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::before,
  &::after {
    background-image: linear-gradient(-180deg, #a1deff 0%, #5ea3db 97%);
    content: '';
    height: 100%;
    position: absolute;
    transition: all 0.2s;
    transition-delay: 0.2s;
    transform: translateY(0) translateX(0);
    width: 100%;
    z-index: -1;
  }
  &::after {
    background-image: linear-gradient(0deg, #ffcf70 0%, #ffae3d 97%);
  }
  &:hover {
    animation-name: hoverPop;
    animation-duration: 0.4s;
    img {
      box-shadow: 2px 2px 4px 0 rgba(10, 12, 15, 0.27);
      box-shadow: 0 0 30px 0 rgba(10, 12, 15, 0.27);
    }
    &::before {
      animation: slick-hover-2 3s 0.4s linear infinite;
      transform: translateY(-20px) translateX(-20px);
    }
    &::after {
      animation: slick-hover 3s 0.4s linear infinite reverse;
      transform: translateY(20px) translateX(20px);
    }
  }
}
.card-content {
  padding: 1rem;
  h3 {
    font-size: 17px;
    line-height: 23px;
    font-weight: bold;
  }
  .course-card-foot {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 10px 20px;
    background-color: #f7fafc;
  }
}

.course-card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  background: #fff;
  margin-bottom: 10px;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  overflow: hidden;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding: 0;
}
span.instructor {
  color: #484848;
  font-weight: 600;
}
span.pricing {
  font-size: 18px;
  color: #313131;
}

.star-rating {
  color: #1bbf1b;
}

@keyframes hoverPop {
  0%,
  100% {
    transform: scale(1);
  }
  33% {
    transform: scale(1.05);
  }
  66% {
    transform: scale(0.9);
  }
}

@keyframes slick-hover {
  0.00% {
    transform: translateY(20px) translateX(20px);
  }
  16.67% {
    transform: translateY(-13px) translateX(-9px);
  }
  33.33% {
    transform: translateY(4px) translateX(12px);
  }
  50.00% {
    transform: translateY(20px) translateX(-20px);
  }
  66.67% {
    transform: translateY(-3px) translateX(8px);
  }
  83.33% {
    transform: translateY(-15px) translateX(-11px);
  }
  100.00% {
    transform: translateY(20px) translateX(20px);
  }
}

@keyframes slick-hover-2 {
  0.00% {
    transform: translateY(-20px) translateX(-20px);
  }
  16.67% {
    transform: translateY(3px) translateX(-5px);
  }
  33.33% {
    transform: translateY(18px) translateX(-10px);
  }
  50.00% {
    transform: translateY(-20px) translateX(20px);
  }
  66.67% {
    transform: translateY(15px) translateX(-4px);
  }
  83.33% {
    transform: translateY(-1px) translateX(15px);
  }
  100.00% {
    transform: translateY(-20px) translateX(-20px);
  }
}
</style>
