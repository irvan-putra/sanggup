plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "com.vanipy.sanggup"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.vanipy.sanggup"
        minSdk = 26
        targetSdk = 34
        versionCode = 7
        versionName = "0.2.1"
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
    sourceSets["main"].assets.srcDir(layout.buildDirectory.dir("webAssets"))
}

// The learning paths are the repo's own web app, bundled so everything works offline.
val copyWeb = tasks.register<Copy>("copyWeb") {
    from(rootProject.projectDir.parentFile) {
        include("index.html", "styles.css", "app.js", "data.js", "mascot.svg", "icon.svg", "LICENSE")
    }
    into(layout.buildDirectory.dir("webAssets/web"))
}
tasks.matching { (it.name.endsWith("Assets") && it.name.startsWith("merge")) || it.name.contains("Lint") || it.name.startsWith("lint") }.configureEach {
    dependsOn(copyWeb)
}

dependencies {
    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test:runner:1.5.2")
    androidTestImplementation("androidx.test.ext:junit:1.1.5")
    androidTestImplementation("androidx.test:core:1.5.0")
}
