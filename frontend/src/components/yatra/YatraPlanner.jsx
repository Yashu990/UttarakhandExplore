import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, MapPin, Calendar, IndianRupee, Users, Car, Home } from 'lucide-react';
import { destinations, transportOptions, accommodationTypes, budgetBreakdown } from '../../data/yatraData';

const YatraPlanner = ({ initialPackage }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [planData, setPlanData] = useState({
        type: initialPackage?.type || '',
        destinations: initialPackage?.destinations || [],
        duration: initialPackage?.duration || '',
        budget: 'midRange',
        travelers: 2,
        transportation: '',
        accommodation: 'midRange',
        preferences: []
    });

    const totalSteps = 6;

    const updatePlanData = (field, value) => {
        setPlanData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
    };

    const calculateEstimate = () => {
        const baseCost = {
            budget: 5000,
            midRange: 10000,
            premium: 20000
        };

        const daysMatch = planData.duration.match(/(\d+)/);
        const days = daysMatch ? parseInt(daysMatch[0]) : 7;
        const destinationCount = planData.destinations.length || 1;

        const estimate = baseCost[planData.budget] * days * planData.travelers * (destinationCount * 0.3 + 0.7);
        return Math.round(estimate);
    };

    // Step 1: Select Type
    const renderTypeSelection = () => {
        const types = [
            { id: 'pilgrimage', label: 'Pilgrimage', icon: '🙏', desc: 'Char Dham, temples, spiritual sites' },
            { id: 'adventure', label: 'Adventure', icon: '🏔️', desc: 'Trekking, skiing, rafting' },
            { id: 'leisure', label: 'Leisure', icon: '🌄', desc: 'Hill stations, sightseeing' },
            { id: 'wildlife', label: 'Wildlife', icon: '🐅', desc: 'National parks, safaris' },
            { id: 'offbeat', label: 'Offbeat', icon: '🗺️', desc: 'Hidden gems, unique experiences' }
        ];

        return (
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-4">What type of yatra are you planning?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {types.map(type => (
                        <button
                            key={type.id}
                            onClick={() => updatePlanData('type', type.id)}
                            className={`p-6 rounded-xl border-2 transition-all ${planData.type === type.id
                                    ? 'border-accent bg-accent/10 shadow-lg'
                                    : 'border-gray-200 hover:border-primary hover:shadow-md'
                                }`}
                        >
                            <div className="text-4xl mb-2">{type.icon}</div>
                            <h4 className="font-bold text-lg text-primary mb-1">{type.label}</h4>
                            <p className="text-sm text-textSecondary">{type.desc}</p>
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    // Step 2: Select Destinations
    const renderDestinationSelection = () => {
        const filteredDestinations = destinations.filter(dest =>
            planData.type ? dest.category.includes(planData.type) : true
        );

        const toggleDestination = (destId) => {
            if (planData.destinations.includes(destId)) {
                updatePlanData('destinations', planData.destinations.filter(id => id !== destId));
            } else {
                updatePlanData('destinations', [...planData.destinations, destId]);
            }
        };

        return (
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Choose your destinations</h3>
                <p className="text-textSecondary mb-6">Select one or more places you'd like to visit</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto pr-2">
                    {filteredDestinations.map(dest => (
                        <div
                            key={dest.id}
                            onClick={() => toggleDestination(dest.id)}
                            className={`relative rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${planData.destinations.includes(dest.id)
                                    ? 'border-accent shadow-xl scale-105'
                                    : 'border-gray-200 hover:border-primary hover:shadow-lg'
                                }`}
                        >
                            <img src={dest.image} alt={dest.name} className="w-full h-40 object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                <h4 className="font-bold text-lg">{dest.name}</h4>
                                <p className="text-xs text-white/80">{dest.difficulty} • {dest.duration}</p>
                            </div>
                            {planData.destinations.includes(dest.id) && (
                                <div className="absolute top-2 right-2 bg-accent text-white rounded-full p-1">
                                    <Check className="h-5 w-5" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <p className="text-sm text-textSecondary">
                    Selected: {planData.destinations.length} destination{planData.destinations.length !== 1 ? 's' : ''}
                </p>
            </div>
        );
    };

    // Step 3: Duration and Travelers
    const renderDurationTravelers = () => {
        const durations = ['3-4 days', '5-7 days', '8-10 days', '10-12 days', '15+ days'];

        return (
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-4 flex items-center space-x-2">
                        <Calendar className="h-6 w-6" />
                        <span>How long is your trip?</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                        {durations.map(duration => (
                            <button
                                key={duration}
                                onClick={() => updatePlanData('duration', duration)}
                                className={`p-4 rounded-lg border-2 transition-all ${planData.duration === duration
                                        ? 'border-accent bg-accent/10 font-bold'
                                        : 'border-gray-200 hover:border-primary'
                                    }`}
                            >
                                {duration}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-primary mb-4 flex items-center space-x-2">
                        <Users className="h-6 w-6" />
                        <span>Number of travelers</span>
                    </h3>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => updatePlanData('travelers', Math.max(1, planData.travelers - 1))}
                            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors font-bold text-xl"
                        >
                            -
                        </button>
                        <div className="px-8 py-4 bg-primary/10 rounded-lg">
                            <span className="text-3xl font-bold text-primary">{planData.travelers}</span>
                        </div>
                        <button
                            onClick={() => updatePlanData('travelers', planData.travelers + 1)}
                            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors font-bold text-xl"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    // Step 4: Budget
    const renderBudgetSelection = () => {
        const budgetLevels = [
            { id: 'budget', label: 'Budget', range: '₹5,000 - ₹15,000', icon: '💰', desc: 'Basic accommodations, local transport' },
            { id: 'midRange', label: 'Mid-Range', range: '₹20,000 - ₹40,000', icon: '💵', desc: 'Comfortable hotels, private vehicles' },
            { id: 'premium', label: 'Premium', range: '₹50,000+', icon: '💎', desc: 'Luxury stays, premium experiences' }
        ];

        return (
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center space-x-2">
                    <IndianRupee className="h-6 w-6" />
                    <span>What's your budget per person?</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {budgetLevels.map(level => (
                        <button
                            key={level.id}
                            onClick={() => {
                                updatePlanData('budget', level.id);
                                updatePlanData('accommodation', level.id);
                            }}
                            className={`p-6 rounded-xl border-2 transition-all text-left ${planData.budget === level.id
                                    ? 'border-accent bg-accent/10 shadow-lg'
                                    : 'border-gray-200 hover:border-primary hover:shadow-md'
                                }`}
                        >
                            <div className="text-4xl mb-3">{level.icon}</div>
                            <h4 className="font-bold text-xl text-primary mb-1">{level.label}</h4>
                            <p className="text-accent font-semibold mb-2">{level.range}</p>
                            <p className="text-sm text-textSecondary">{level.desc}</p>
                        </button>
                    ))}
                </div>

                {planData.duration && planData.destinations.length > 0 && (
                    <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                        <h4 className="font-bold text-lg text-primary mb-4">Estimated Total Cost</h4>
                        <div className="text-4xl font-bold text-accent mb-2">
                            ₹{calculateEstimate().toLocaleString('en-IN')}
                        </div>
                        <p className="text-sm text-textSecondary">
                            For {planData.travelers} traveler{planData.travelers > 1 ? 's' : ''} • {planData.duration}
                        </p>
                    </div>
                )}
            </div>
        );
    };

    // Step 5: Transportation
    const renderTransportation = () => {
        const transportModes = [
            { id: 'private-car', label: 'Private Car', icon: '🚗', desc: 'Most convenient, flexible schedule' },
            { id: 'bus', label: 'Bus', icon: '🚌', desc: 'Budget friendly, regular services' },
            { id: 'train-road', label: 'Train + Road', icon: '🚆', desc: 'Economical, comfortable' },
            { id: 'air-road', label: 'Flight + Road', icon: '✈️', desc: 'Fastest option' }
        ];

        return (
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center space-x-2">
                    <Car className="h-6 w-6" />
                    <span>How would you like to travel?</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {transportModes.map(mode => (
                        <button
                            key={mode.id}
                            onClick={() => updatePlanData('transportation', mode.id)}
                            className={`p-6 rounded-xl border-2 transition-all text-left ${planData.transportation === mode.id
                                    ? 'border-accent bg-accent/10 shadow-lg'
                                    : 'border-gray-200 hover:border-primary hover:shadow-md'
                                }`}
                        >
                            <div className="text-4xl mb-2">{mode.icon}</div>
                            <h4 className="font-bold text-lg text-primary mb-1">{mode.label}</h4>
                            <p className="text-sm text-textSecondary">{mode.desc}</p>
                        </button>
                    ))}
                </div>
            </div>
        );
    };

    // Step 6: Summary & Generate
    const renderSummary = () => {
        const selectedDests = destinations.filter(d => planData.destinations.includes(d.id));

        return (
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-6">Review Your Yatra Plan</h3>

                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-textSecondary mb-2">Yatra Type</h4>
                            <p className="text-xl font-bold text-primary capitalize">{planData.type}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-textSecondary mb-2">Duration</h4>
                            <p className="text-xl font-bold text-primary">{planData.duration}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-textSecondary mb-2">Travelers</h4>
                            <p className="text-xl font-bold text-primary">{planData.travelers} Person{planData.travelers > 1 ? 's' : ''}</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-textSecondary mb-2">Budget Category</h4>
                            <p className="text-xl font-bold text-primary capitalize">{planData.budget}</p>
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-primary/20">
                        <h4 className="font-semibold text-textSecondary mb-3">Destinations ({selectedDests.length})</h4>
                        <div className="flex flex-wrap gap-2">
                            {selectedDests.map(dest => (
                                <span key={dest.id} className="px-4 py-2 bg-white rounded-full text-primary font-medium text-sm">
                                    📍 {dest.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-primary/20 bg-white/50 rounded-lg p-6">
                        <h4 className="font-bold text-lg text-primary mb-2">Estimated Total Cost</h4>
                        <div className="text-5xl font-bold text-accent">
                            ₹{calculateEstimate().toLocaleString('en-IN')}
                        </div>
                        <p className="text-textSecondary mt-2">
                            This is an approximate cost. Actual expenses may vary.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="px-12 py-4 bg-gradient-to-r from-accent to-yellow-500 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                        Generate Detailed Itinerary
                    </button>
                </div>
            </div>
        );
    };

    const steps = [
        { number: 1, title: 'Type', render: renderTypeSelection },
        { number: 2, title: 'Destinations', render: renderDestinationSelection },
        { number: 3, title: 'Duration', render: renderDurationTravelers },
        { number: 4, title: 'Budget', render: renderBudgetSelection },
        { number: 5, title: 'Transport', render: renderTransportation },
        { number: 6, title: 'Review', render: renderSummary }
    ];

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    {steps.map((step, index) => (
                        <React.Fragment key={step.number}>
                            <div className="flex flex-col items-center">
                                <div
                                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${currentStep >= step.number
                                            ? 'bg-accent text-white'
                                            : 'bg-gray-200 text-gray-500'
                                        }`}
                                >
                                    {currentStep > step.number ? <Check className="h-5 w-5" /> : step.number}
                                </div>
                                <span className="text-xs mt-1 text-textSecondary hidden md:block">{step.title}</span>
                            </div>
                            {index < steps.length - 1 && (
                                <div className={`flex-1 h-1 mx-2 ${currentStep > step.number ? 'bg-accent' : 'bg-gray-200'}`} />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-[400px]"
                >
                    {steps[currentStep - 1].render()}
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
                <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${currentStep === 1
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-gray-200 text-primary hover:bg-gray-300'
                        }`}
                >
                    <ChevronLeft className="h-5 w-5" />
                    <span>Previous</span>
                </button>

                {currentStep < totalSteps && (
                    <button
                        onClick={nextStep}
                        className="flex items-center space-x-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-accent transition-all"
                    >
                        <span>Next</span>
                        <ChevronRight className="h-5 w-5" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default YatraPlanner;
