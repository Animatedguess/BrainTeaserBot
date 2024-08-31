import React from 'react'

function Pagination() {
    return (
        <ol className="flex justify-center gap-1 text-xs font-medium">
            <li>
                <a
                    href="/prev"
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                    <span className="sr-only">Prev Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </li>

            <li>
                <a
                    href="/1"
                    className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                    1
                </a>
            </li>

            <li className="block size-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white">
                2
            </li>

            <li>
                <a
                    href="/3"
                    className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                    3
                </a>
            </li>

            <li>
                <a
                    href="#/4"
                    className="block size-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                    4
                </a>
            </li>

            <li>
                <a
                    href="/next"
                    className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                    <span className="sr-only">Next Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </li>
        </ol>
    )
}

export default Pagination
