#!/bin/bash

branch_name=$(git symbolic-ref -q HEAD)
branch_name=${branch_name##refs/heads/}
branch_name=${branch_name:-HEAD}

if [[ $branch_name = "master" ]]; then
    echo "You cannot push directly to master branch. Please create a new branch."
    exit 1;
fi

PS3='What sort of update is this? '
options=("Major" "Minor" "Patch" "Cancel program!")
select opt in "${options[@]}"
do
    case $opt in
        "Major")
            version_kind="major"
            break
            ;;
        "Minor")
            version_kind="minor"
            break
            ;;
        "Patch")
            version_kind="patch"
            break
            ;;
        "Cancel program!")
            exit 0
            ;;
        *) echo "invalid option $REPLY";;
    esac
done

package_version=$(npm --no-git-tag-version version $version_kind)

echo "Package version updated to $package_version"

echo "Please commit everything and create a merge request to master. The new version will be published upon merge."
