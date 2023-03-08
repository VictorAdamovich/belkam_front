#!/bin/sh

export_preset() {
  local envFile=${1:-.env}
  while IFS= read -r line; do
    stripline="${line// /}"
    case "$stripline" in
      "#"*) continue ;;
    esac
    [[ -z "$stripline" ]] && continue
    key=$(echo "$line" | cut -d '=' -f 1)
    value=$(echo "$line" | cut -d '=' -f 2-)
    eval "export ${key}=\"__CONFIG_PRESET__${key}__\""
  done < "$envFile"
}


for file in $(ls .env*); do
  echo "Loading env from $file"
  export_preset $file
done

exec "$@"
