import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../Data/categoryData';
import { openTriviaApi } from '../Data/openTriviaApi';
import Congratulation from '../component/Congratulation.component'; // Import Congratulation component

function QuestionAnswer() {
    const { category, difficulty, type } = useParams();
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // Track correct answers
    const [quizFinished, setQuizFinished] = useState(false); // Track if the quiz is finished

    useEffect(() => {
        const selectedCategory = categories.find(cat => cat.name.toLowerCase() === category.toLowerCase());

        if (selectedCategory) {
            const abortController = new AbortController();
            const signal = abortController.signal;

            const fetchData = async () => {
                try {
                    setLoading(true);
                    setError(null);

                    const response = await openTriviaApi(selectedCategory.id, difficulty, type, signal);
                    console.log('API response:', response);

                    if (response && response.results && response.results.length > 0) {
                        setQuestions(response.results);
                        setCurrentQuestionIndex(0);
                    } else {
                        setError('No questions found.');
                    }
                } catch (err) {
                    if (err.name === 'AbortError') {
                        console.log('Fetch aborted');
                    } else {
                        setError('Error fetching data');
                        console.error("Error fetching data:", err);
                    }
                } finally {
                    setLoading(false);
                }
            };

            fetchData();

            return () => {
                abortController.abort();
            };
        } else {
            setError('Invalid category.');
            setLoading(false);
        }
    }, [category, difficulty, type]);

    if (loading) {
        return <div className="text-center">Loading questions...</div>;
    }

    if (error) {
        return <div className="text-center text-red-600">{error}</div>;
    }

    if (questions.length === 0) {
        return <div className="text-center">No questions available.</div>;
    }

    const currentQuestion = questions[currentQuestionIndex];

    const handleNextQuestion = () => {
        // Check if the selected answer is correct
        if (selectedAnswer === currentQuestion.correct_answer) {
            setCorrectAnswersCount(prevCount => prevCount + 1);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedAnswer(''); // Reset selected answer
        } else {
            setQuizFinished(true); // Quiz finished
        }
    };

    const handleAnswerChange = (answer) => {
        setSelectedAnswer(answer);
    };

    const shuffledAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
        .sort(() => Math.random() - 0.5);

    if (quizFinished) {
        return (
            <Congratulation 
                correctAnswers={correctAnswersCount} 
                totalQuestions={questions.length} 
                category={category} 
            />
        ); // Render Congratulation component when quiz is finished
    }

    return (
        <div className="flex justify-center items-center">
            <div className="bg-[#FAF1E7] p-8 rounded-lg shadow-lg max-w-xl w-full bg-opacity-45">
                <h2 className="text-center text-lg font-semibold text-gray-600 mb-4">
                    {`Category: ${category}`}
                </h2>
                <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-blue-500">{currentQuestionIndex + 1}</span>
                    <span className="text-lg font-medium text-gray-500">/ {questions.length}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-6">
                    <div dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
                </h3>
                <div className="space-y-4">
                    {shuffledAnswers.map((answer, index) => (
                        <label key={index} className="flex items-center space-x-3 cursor-pointer">
                            <input
                                type="radio"
                                name="question"
                                className="form-radio h-5 w-5 text-blue-600"
                                value={answer}
                                checked={selectedAnswer === answer}
                                onChange={() => handleAnswerChange(answer)}
                            />
                            <span className="block p-3 bg-gray-100 rounded-lg shadow-sm w-full">
                                <div dangerouslySetInnerHTML={{ __html: answer }} />
                            </span>
                        </label>
                    ))}
                </div>
                <div className="text-center mt-6">
                    <button
                        className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700"
                        onClick={handleNextQuestion}
                        disabled={!selectedAnswer}
                    >
                        Next Question
                    </button>
                </div>
            </div>
        </div>
    );
}

export default QuestionAnswer;
