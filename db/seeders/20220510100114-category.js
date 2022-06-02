'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
      await queryInterface.bulkInsert('Categories', [
        {
          name: "Выставки",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Мастер-классы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Фестивали",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Спортивные мероприятия",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Презентации, пресс конференции",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Форумы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Корпоративные мероприятия",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Карнавалы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Музыкальные джемы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Концерты",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Театральная афиша",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Кино афиша",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Чайные церомонии",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Светские рауты",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Туристические мероприятия",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Встречи в узком кругу",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Мероприятия 18+",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ярмарки мастеров",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Дачные ярмарки",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Время играть в настолки!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Шашлыки на природе",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Открытые вечеринки",
          createdAt: new Date(),
          updatedAt: new Date(),
        },

    ], {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
