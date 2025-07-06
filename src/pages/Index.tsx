import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Hammer" size={32} className="text-orange-500" />
              <h1 className="text-2xl font-bold text-slate-800">
                МеталлСервис
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-slate-600 hover:text-orange-500 transition-colors"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-slate-600 hover:text-orange-500 transition-colors"
              >
                О нас
              </a>
              <a
                href="#services"
                className="text-slate-600 hover:text-orange-500 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#portfolio"
                className="text-slate-600 hover:text-orange-500 transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-orange-500 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Изготовление изделий из металла
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Профессиональное производство ворот, заборов, лестниц и
              индивидуальных металлоконструкций в Новочебоксарске
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3"
              >
                <Icon name="Eye" size={20} className="mr-2" />
                Посмотреть работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-slate-600">
              Полный спектр услуг по металлообработке
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Icon name="DoorOpen" size={32} className="text-orange-500" />
                </div>
                <CardTitle className="text-2xl text-slate-800">
                  Ворота
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-center">
                  Распашные, откатные и автоматические ворота для частных домов
                  и предприятий. Индивидуальное проектирование и установка.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Icon name="Fence" size={32} className="text-orange-500" />
                </div>
                <CardTitle className="text-2xl text-slate-800">
                  Заборы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-center">
                  Металлические заборы любой сложности. Профнастил,
                  сетка-рабица, кованые элементы. Быстрая установка.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                  <Icon name="Stairs" size={32} className="text-orange-500" />
                </div>
                <CardTitle className="text-2xl text-slate-800">
                  Лестницы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 text-center">
                  Металлические лестницы для дома и офиса. Винтовые, маршевые,
                  пожарные. Современный дизайн и надежность.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                О нашей компании
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Мы специализируемся на изготовлении качественных
                металлоконструкций уже более 10 лет. Наша команда профессионалов
                готова воплотить в жизнь любые ваши идеи.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500"
                  />
                  <span className="text-slate-700">
                    Собственное производство
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500"
                  />
                  <span className="text-slate-700">Качественные материалы</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500"
                  />
                  <span className="text-slate-700">
                    Быстрые сроки изготовления
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="text-green-500"
                  />
                  <span className="text-slate-700">Гарантия на все работы</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Почему выбирают нас
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    500+
                  </div>
                  <div className="text-slate-600">Выполненных проектов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    10+
                  </div>
                  <div className="text-slate-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    2
                  </div>
                  <div className="text-slate-600">Года гарантии</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">
                    24/7
                  </div>
                  <div className="text-slate-600">Поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-slate-600">
              Примеры выполненных проектов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/img/3678388a-9bfe-4e6b-b39f-d1aee96f0ad5.jpg"
                  alt="Автоматические ворота"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Автоматические ворота</CardTitle>
                <CardDescription>
                  Современные откатные ворота с автоматическим приводом для
                  частного дома
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/img/74660bd7-41d6-47b0-a716-a9221763ceec.jpg"
                  alt="Металлический забор"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">Металлический забор</CardTitle>
                <CardDescription>
                  Прочный металлический забор с профнастилом и коваными
                  элементами
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src="/img/f9a0207e-2d29-400c-84c8-6691696790f0.jpg"
                  alt="Металлическая лестница"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">
                  Металлическая лестница
                </CardTitle>
                <CardDescription>
                  Современная лестница с металлическими перилами и ступенями
                </CardDescription>
              </CardHeader>
            </Card>

            {[4, 5, 6].map((item) => (
              <Card
                key={item}
                className="group hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-orange-400" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Проект {item}</CardTitle>
                  <CardDescription>
                    Описание выполненного проекта металлоконструкции
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Контакты</h2>
            <p className="text-xl text-slate-300">
              Свяжитесь с нами для получения консультации
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Телефон</h3>
              <p className="text-slate-300">+7 (8352) 123-456</p>
              <p className="text-slate-300">+7 (927) 123-456</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-slate-300">info@metallservice.ru</p>
              <p className="text-slate-300">orders@metallservice.ru</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Адрес</h3>
              <p className="text-slate-300">г. Новочебоксарск</p>
              <p className="text-slate-300">ул. Промышленная, 15</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Hammer" size={24} className="text-orange-500" />
              <span className="text-white font-bold">МеталлСервис</span>
            </div>
            <div className="text-slate-400 text-sm">
              © 2024 МеталлСервис. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
