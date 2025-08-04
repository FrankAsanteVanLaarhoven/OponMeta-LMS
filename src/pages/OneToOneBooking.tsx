import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, Video, Phone, MessageCircle, Star, Briefcase, Target, Globe, DollarSign, Languages, Cloud, ChevronDown } from 'lucide-react';
import InteractiveCalendar from '@/components/ui/visualize-booking';

const getLondonTime = () => {
  const now = new Date();
  return now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
};

const getTimeInTimezone = (tz) => {
  const now = new Date();
  return now.toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
};

const timezones = [
  { name: 'London', offset: 0, city: 'London', tz: 'Europe/London' },
  { name: 'UTC', offset: 0, city: 'UTC', tz: 'UTC' },
  { name: 'New York', offset: -5, city: 'New York', tz: 'America/New_York' },
  { name: 'Los Angeles', offset: -8, city: 'Los Angeles', tz: 'America/Los_Angeles' },
  { name: 'Paris', offset: 1, city: 'Paris', tz: 'Europe/Paris' },
  { name: 'Tokyo', offset: 9, city: 'Tokyo', tz: 'Asia/Tokyo' },
  { name: 'Sydney', offset: 10, city: 'Sydney', tz: 'Australia/Sydney' },
];

const OneToOneBooking = () => {
  const [selectedCreator, setSelectedCreator] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(0.85);
  const [weather, setWeather] = useState(null);
  const [clockTimes, setClockTimes] = useState({});
  const [panelOpen, setPanelOpen] = useState({
    expert: true,
    service: true,
    worldClock: true,
    currency: true,
    language: true,
    weather: true,
    whatToExpect: true,
  });

  // Real-time clock update
  useEffect(() => {
    const updateClocks = () => {
      const times = {};
      timezones.forEach(tz => {
        times[tz.city] = getTimeInTimezone(tz.tz);
      });
      setClockTimes(times);
    };
    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  // Always use current date for calendar
  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  // Generate current month calendar
  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const isToday = date.toDateString() === today.toDateString();
      const isPast = date < today && !isToday;
      
      days.push({
        date: date,
        day: date.getDate(),
        isCurrentMonth,
        isToday,
        isPast,
        hasBooking: Math.random() > 0.7 && isCurrentMonth && !isPast, // Random booking availability
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendar();

  // Currency conversion
  const convertCurrency = () => {
    return (amount * exchangeRate).toFixed(2);
  };

  // Weather API simulation
  useEffect(() => {
    // Simulate weather data
    const weatherData = {
      location: 'Your Location',
      current: {
        temp: 22,
        condition: 'Partly Cloudy',
        icon: '☁️'
      },
      forecast: [
        { day: 'Mon', temp: 24, condition: 'Sunny', icon: '☀️' },
        { day: 'Tue', temp: 21, condition: 'Cloudy', icon: '☁️' },
        { day: 'Wed', temp: 19, condition: 'Rainy', icon: '��️' },
        { day: 'Thu', temp: 23, condition: 'Partly Cloudy', icon: '⛅' },
        { day: 'Fri', temp: 26, condition: 'Sunny', icon: '☀️' },
        { day: 'Sat', temp: 25, condition: 'Sunny', icon: '☀️' },
        { day: 'Sun', temp: 22, condition: 'Cloudy', icon: '☁️' },
      ]
    };
    setWeather(weatherData);
  }, []);

  const creators = [
    {
      id: '1',
      name: 'Dr. Sarah Johnson',
      expertise: 'AI & Machine Learning',
      rating: 4.9,
      reviews: 127,
      avatar: '/placeholder.svg',
      hourlyRate: 150,
      availability: ['Mon', 'Wed', 'Fri'],
    },
    {
      id: '2',
      name: 'Prof. Michael Chen',
      expertise: 'Data Science & Analytics',
      rating: 4.8,
      reviews: 89,
      avatar: '/placeholder.svg',
      hourlyRate: 180,
      availability: ['Tue', 'Thu', 'Sat'],
    },
    {
      id: '3',
      name: 'Lisa Rodriguez',
      expertise: 'UX/UI Design',
      rating: 4.7,
      reviews: 156,
      avatar: '/placeholder.svg',
      hourlyRate: 120,
      availability: ['Mon', 'Tue', 'Wed', 'Thu'],
    },
  ];

  const services = [
    {
      id: 'consultation',
      name: '1:1 Consultation',
      duration: '60 min',
      price: 150,
      description: 'Personalised guidance and consultation on your learning journey',
    },
    {
      id: 'mentoring',
      name: 'Mentoring Session',
      duration: '90 min',
      price: 200,
      description: 'In-depth mentoring and career guidance',
    },
    {
      id: 'review',
      name: 'Portfolio Review',
      duration: '45 min',
      price: 100,
      description: 'Professional review of your work and projects',
    },
    {
      id: 'workshop',
      name: 'Workshop Session',
      duration: '120 min',
      price: 250,
      description: 'Hands-on workshop with practical exercises',
    },
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM',
  ];

  const meetingTypes = [
    { id: 'video', name: 'Video Call', icon: Video, description: 'Zoom, Google Meet, or Teams' },
    { id: 'phone', name: 'Phone Call', icon: Phone, description: 'Audio-only consultation' },
    { id: 'chat', name: 'Chat Session', icon: MessageCircle, description: 'Text-based consultation' },
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'it', name: 'Italiano' },
    { code: 'pt', name: 'Português' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
    { code: 'zh', name: '中文' },
  ];

  const currencies = [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' },
    { code: 'GBP', name: 'British Pound' },
    { code: 'JPY', name: 'Japanese Yen' },
    { code: 'CAD', name: 'Canadian Dollar' },
    { code: 'AUD', name: 'Australian Dollar' },
    { code: 'CHF', name: 'Swiss Franc' },
    { code: 'CNY', name: 'Chinese Yuan' },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0a1834] flex flex-col items-center justify-start px-4 py-10 md:justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Expert & Service Selection */}
        <div className="space-y-8">
          {/* Choose Your Expert */}
          <div className="bg-[#16203a] border-2 border-[#11204a] rounded-3xl shadow-2xl p-6">
            <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setPanelOpen(p => ({...p, expert: !p.expert}))}>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-cyan-300" /> Choose Your Expert
              </h2>
              <ChevronDown className={`h-5 w-5 text-cyan-300 transition-transform ${panelOpen.expert ? '' : 'rotate-180'}`} />
            </div>
            {panelOpen.expert && (
              <div className="space-y-4">
                {creators.map((creator) => (
                  <div key={creator.id} className={`flex items-center justify-between p-4 rounded-xl border border-[#11204a] bg-[#22305a] shadow-md transition-all cursor-pointer hover:scale-[1.02] ${selectedCreator === creator.id ? 'ring-2 ring-cyan-300' : ''}`}
                    onClick={() => setSelectedCreator(creator.id)}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#16203a] flex items-center justify-center text-lg font-bold text-white border-2 border-[#11204a]">
                        {creator.avatar ? <img src={creator.avatar} alt={creator.name} className="w-full h-full rounded-full object-cover" /> : creator.name.split(' ').map(n => n[0]).join('').slice(0,2)}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{creator.name}</div>
                        <div className="text-xs text-cyan-300">{creator.expertise}</div>
                        <div className="flex items-center gap-1 text-yellow-300 text-xs mt-1">
                          <Star className="h-3 w-3" /> {creator.rating} <span className="text-cyan-200">({creator.reviews} reviews)</span>
                        </div>
                        <div className="text-xs text-cyan-200 mt-1">Available: {creator.availability.join(', ')}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-yellow-300 text-lg">${creator.hourlyRate}/hr</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Select Service */}
          <div className="bg-[#16203a] border-2 border-[#11204a] rounded-3xl shadow-2xl p-6">
            <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setPanelOpen(p => ({...p, service: !p.service}))}>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-cyan-300" /> Select Service
              </h2>
              <ChevronDown className={`h-5 w-5 text-cyan-300 transition-transform ${panelOpen.service ? '' : 'rotate-180'}`} />
            </div>
            {panelOpen.service && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service.id} className={`rounded-xl border border-[#11204a] bg-[#22305a] p-4 shadow-md cursor-pointer transition-all hover:scale-[1.02] ${selectedService === service.id ? 'ring-2 ring-cyan-300' : ''}`}
                    onClick={() => setSelectedService(service.id)}>
                    <div className="font-semibold text-white text-lg mb-1">{service.name}</div>
                    <div className="text-cyan-300 text-xs mb-2">{service.description}</div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-yellow-300" /> {service.duration} min
                      <span className="ml-auto font-bold text-yellow-300">${service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center Column: Calendar & Booking */}
        <div className="space-y-8">
          {/* Previous Calendar with Side View/Slide-Out */}
          <div className="bg-[#16203a] border-2 border-[#11204a] rounded-3xl shadow-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Calendar className="h-5 w-5 text-cyan-300" /> Available Dates (London Time)
              </h2>
              <div className="text-cyan-300 text-sm">
                {currentDate.toLocaleDateString('en-GB', { month: 'long', year: 'numeric', timeZone: 'Europe/London' })}
              </div>
            </div>
            <InteractiveCalendar />
          </div>
          {/* Time Selection (keep as is) */}
          {selectedDate && (
            <div className="bg-[#16203a] border-2 border-[#11204a] rounded-3xl shadow-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-cyan-300" /> Select Time
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    className={`p-3 rounded-xl border border-[#11204a] bg-[#22305a] text-white transition-all hover:scale-[1.02] ${selectedTime === time ? 'ring-2 ring-cyan-300 bg-[#2a3a6a]' : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: World Clock, Currency, Language, Weather */}
        <div className="space-y-8">
          {/* World Clock */}
          <div className="bg-[#16203a] border-2 border-[#11204a] rounded-3xl shadow-2xl p-6">
            <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setPanelOpen(p => ({...p, worldClock: !p.worldClock}))}>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-cyan-300" /> World Clock (Current: London)
              </h2>
              <ChevronDown className={`h-5 w-5 text-cyan-300 transition-transform ${panelOpen.worldClock ? '' : 'rotate-180'}`} />
            </div>
            {panelOpen.worldClock && (
              <div className="space-y-3">
                {timezones.map((tz, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-xl bg-[#22305a] border border-[#11204a]">
                    <div>
                      <div className="text-white font-medium">{tz.city}{tz.city === 'London' && ' (Current)'}</div>
                      <div className="text-cyan-300 text-sm">{tz.name}</div>
                    </div>
                    <div className="text-yellow-300 font-mono text-lg">
                      {clockTimes[tz.city]}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Currency Calculator */}
          <div className="bg-[#16203a] border-2 border-[#11204a] rounded-3xl shadow-2xl p-6">
            <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setPanelOpen(p => ({...p, currency: !p.currency}))}>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-cyan-300" /> Currency Converter
              </h2>
              <ChevronDown className={`h-5 w-5 text-cyan-300 transition-transform ${panelOpen.currency ? '' : 'rotate-180'}`} />
            </div>
            {panelOpen.currency && (
              <div className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="flex-1 p-3 rounded-xl bg-[#22305a] border border-[#11204a] text-white placeholder-gray-400"
                    placeholder="Amount"
                  />
                  <select
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                    className="p-3 rounded-xl bg-[#22305a] border border-[#11204a] text-white"
                  >
                    {currencies.map(currency => (
                      <option key={currency.code} value={currency.code}>{currency.code}</option>
                    ))}
                  </select>
                </div>
                <div className="flex gap-2">
                  <div className="flex-1 p-3 rounded-xl bg-[#22305a] border border-[#11204a] text-white">
                    {convertCurrency()}
                  </div>
                  <select
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                    className="p-3 rounded-xl bg-[#22305a] border border-[#11204a] text-white"
                  >
                    {currencies.map(currency => (
                      <option key={currency.code} value={currency.code}>{currency.code}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Language Selection */}
          <div className="bg-[#16203a] border-2 border-[#11204a] rounded-3xl shadow-2xl p-6">
            <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setPanelOpen(p => ({...p, language: !p.language}))}>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Languages className="h-5 w-5 text-cyan-300" /> Language
              </h2>
              <ChevronDown className={`h-5 w-5 text-cyan-300 transition-transform ${panelOpen.language ? '' : 'rotate-180'}`} />
            </div>
            {panelOpen.language && (
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full p-3 rounded-xl bg-[#22305a] border border-[#11204a] text-white"
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))}
              </select>
            )}
          </div>

          {/* Weather Forecast */}
          {weather && (
            <div className="bg-[#16203a] border-2 border-[#11204a] rounded-3xl shadow-2xl p-6">
              <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setPanelOpen(p => ({...p, weather: !p.weather}))}>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-cyan-300" /> Weather Forecast
                </h2>
                <ChevronDown className={`h-5 w-5 text-cyan-300 transition-transform ${panelOpen.weather ? '' : 'rotate-180'}`} />
              </div>
              {panelOpen.weather && (
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-[#22305a] border border-[#11204a]">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-white font-medium">Today</div>
                        <div className="text-cyan-300 text-sm">{weather.current.condition}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl">{weather.current.icon}</div>
                        <div className="text-yellow-300 font-bold">{weather.current.temp}°C</div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {weather.forecast.map((day, index) => (
                      <div key={index} className="text-center p-2 rounded-lg bg-[#22305a] border border-[#11204a]">
                        <div className="text-cyan-300 text-xs">{day.day}</div>
                        <div className="text-2xl my-1">{day.icon}</div>
                        <div className="text-white text-xs">{day.temp}°</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* What to Expect */}
          <div className="bg-[#16203a] border-2 border-[#11204a] rounded-3xl shadow-2xl p-6">
            <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setPanelOpen(p => ({...p, whatToExpect: !p.whatToExpect}))}>
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-cyan-300" /> What to Expect
              </h2>
              <ChevronDown className={`h-5 w-5 text-cyan-300 transition-transform ${panelOpen.whatToExpect ? '' : 'rotate-180'}`} />
            </div>
            {panelOpen.whatToExpect && (
              <ul className="space-y-2 text-cyan-200 text-sm list-disc list-inside">
                <li>Receive a confirmation email with meeting details and calendar invite</li>
                <li>Join the session 5 minutes early to test your audio and video</li>
                <li>Come prepared with questions and topics you'd like to discuss</li>
                <li>Receive a summary and follow-up resources after the session</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneToOneBooking; 