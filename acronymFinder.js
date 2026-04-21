function findOrg(acronym) {
  const orgs = [
    "National Avocado Storage Authority",
    "Cats Infiltration Agency",
    "Fluffy Beanbag Inspectors",
    "Department Of Jelly",
    "Wild Honey Organization",
    "Eating Pancakes Administration"
  ];

  for (const org of orgs) {
    const initials = org
      .split(" ")
      .map(word => word[0])
      .join("");

    if (initials === acronym) {
      return org;
    }
  }
}
