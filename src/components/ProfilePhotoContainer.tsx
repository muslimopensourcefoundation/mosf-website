interface ProfilePhotoContainerProps {
  photoUrl?: string;
}

export default function ProfilePhotoContainer({ photoUrl }: ProfilePhotoContainerProps) {
  return (
    <div className="flex-shrink-0">
      <div className="w-48 h-48 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <svg
            className="w-24 h-24 text-gray-400 dark:text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

