import ProfilePhotoContainer from "./ProfilePhotoContainer";
import SocialLinks from "./SocialLinks";

export interface TeamMember {
  photoUrl?: string;
  name: string;
  role: string;
  bio: string;
  whyMosf: string;
  focusAreas: string[];
  location: string;
  contacts: Record<string, string>;
}

interface TeamMemberProfileProps {
  member: TeamMember;
}

export default function TeamMemberProfile({ member }: TeamMemberProfileProps) {
  const { photoUrl, name, role, bio, whyMosf, focusAreas, location, contacts } =
    member;
  return (
    <div className="bg-white dark:bg-mosf-dark-alt border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-sm">
      <div className="flex flex-col md:flex-row gap-8">
        <ProfilePhotoContainer photoUrl={photoUrl} />

        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {name}
            </h2>
            <p className="text-xl text-mosf-navy-dark dark:text-mosf-navy-300 font-medium">
              {role}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Bio
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {bio}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Why MOSF?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {whyMosf}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Professional Focus Areas
              </h3>
              <ul className="flex flex-wrap gap-2">
                {focusAreas.map((area, index) => (
                  <li
                    key={index}
                    className="px-3 py-1 bg-mosf-navy-50 dark:bg-mosf-navy-900/30 text-mosf-navy-dark dark:text-mosf-navy-300 rounded-full text-sm font-medium"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Location
              </h3>
              <p className="text-gray-700 dark:text-gray-300">{location}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Connect
              </h3>
              <SocialLinks contacts={contacts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

